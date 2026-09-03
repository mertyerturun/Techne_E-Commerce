'use client';

import React, { useEffect, useRef, useSyncExternalStore } from 'react';

type FluidFlowGridProps = {
    /** Overlay content rendered above the canvas. Defaults to the original demo copy. */
    children?: React.ReactNode;
    className?: string;
    /** Tailwind height utility for the section. Defaults to a full-viewport hero. */
    heightClassName?: string;
};

function subscribeToColorScheme(callback: () => void) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', callback);
    return () => mediaQuery.removeEventListener('change', callback);
}

function getIsDarkMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function getIsDarkModeServerSnapshot() {
    return true;
}

export default function FluidFlowGrid({ children, className = '', heightClassName = 'h-screen' }: FluidFlowGridProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const isDarkMode = useSyncExternalStore(
        subscribeToColorScheme,
        getIsDarkMode,
        getIsDarkModeServerSnapshot
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d', { alpha: false });
        if (!ctx) return;

        let animationFrameId: number;
        let width = 0;
        let height = 0;

        const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };

        const handleResize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const parent = canvas.parentElement;
            width = parent ? parent.clientWidth : window.innerWidth;
            height = parent ? parent.clientHeight : window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            // Canvas is a replaced element: `absolute inset-0` alone does not
            // stretch it to fill the container (it falls back to its intrinsic
            // 300x150 size). The CSS size must be set explicitly.
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.targetX = e.clientX - rect.left;
            mouse.targetY = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouse.targetX = -1000;
            mouse.targetY = -1000;
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);

        let time = 0;

        const render = () => {
            time += 0.008;

            // Mouse smooth interpolation
            mouse.x += (mouse.targetX - mouse.x) * 0.08;
            mouse.y += (mouse.targetY - mouse.y) * 0.08;

            // Aura Precision palette — monochrome, no brand hue.
            const bgColor = isDarkMode ? '#0a0a0a' : '#f5f5f7';
            const lineBaseColor = '134, 134, 139'; // secondary gray (#86868b)
            const accentColor = isDarkMode ? '255, 255, 255' : '0, 0, 0';

            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, width, height);

            const spacing = 35;
            const cols = Math.ceil(width / spacing) + 1;
            const rows = Math.ceil(height / spacing) + 1;

            ctx.lineWidth = 1.2;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * spacing;
                    const y = j * spacing;

                    // Trigonometric fluid turbulence angle
                    let angle = Math.sin(x * 0.003 + time) + Math.cos(y * 0.003 + time);

                    // Distance to mouse force field
                    const dx = mouse.x - x;
                    const dy = mouse.y - y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    let isNear = false;
                    if (dist < 220 && dist > 0) {
                        isNear = true;
                        const pushAngle = Math.atan2(dy, dx) + Math.PI;
                        const force = (1 - dist / 220);
                        angle = angle * (1 - force) + pushAngle * force;
                    }

                    const lineLen = isNear ? 22 : 14;
                    const x2 = x + Math.cos(angle) * lineLen;
                    const y2 = y + Math.sin(angle) * lineLen;

                    const alpha = isNear
                        ? 0.8
                        : (0.15 + Math.sin(x * 0.01 + y * 0.01 + time) * 0.1);

                    ctx.strokeStyle = isNear
                        ? `rgba(${accentColor}, ${alpha})`
                        : `rgba(${lineBaseColor}, ${alpha})`;

                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x2, y2);
                    ctx.stroke();
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isDarkMode]);

    return (
        <div className={`relative w-full ${heightClassName} overflow-hidden select-none bg-black ${className}`}>
            <canvas ref={canvasRef} className="absolute inset-0 block cursor-default" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4 pointer-events-none mix-blend-difference text-white">
                {children ?? (
                    <>
                        <span className="font-mono text-xs tracking-widest uppercase mb-3 text-white/60">
                            FLUID_VECTOR_STREAM
                        </span>
                        <h1 className="font-mono text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
                            CURRENT
                        </h1>
                        <p className="mt-4 font-mono text-xs md:text-sm max-w-lg opacity-70">
                            Smooth directional flow field rendered in calm, neutral tones.
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}
