"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Starting vertical offset in px. */
  y?: number;
  /** Starting scale (e.g. 0.94 for a subtle pop-in). Omit for none. */
  scale?: number;
  delay?: number;
  /** ScrollTrigger start position. */
  start?: string;
  /** When set, animates each direct child with this stagger (seconds) instead of the container. */
  stagger?: number;
  duration?: number;
};

export default function Reveal({
  children,
  className,
  y = 28,
  scale,
  delay = 0,
  start = "top 85%",
  stagger,
  duration = 0.7,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets: gsap.TweenTarget = stagger ? Array.from(el.children) : el;

        gsap.from(targets, {
          opacity: 0,
          y,
          ...(scale ? { scale } : {}),
          duration,
          delay,
          ease: "power2.out",
          stagger,
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none reverse",
          },
        });
      });

      return () => mm.revert();
    },
    { scope: ref, dependencies: [y, scale, delay, start, stagger, duration] }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
