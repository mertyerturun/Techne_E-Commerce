"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

const links = [
  { label: "Mağaza", href: "/" },
  { label: "Techne Pro", href: "/product/techne-pro" },
  { label: "Techne Air", href: "/product/techne-air" },
  { label: "Aksesuarlar", href: "/#urunler" },
];

export default function Navbar() {
  const { totalCount, hydrated } = useCart();

  return (
    <header className="glass-nav sticky top-0 z-50">
      <div
        className="mx-auto flex h-14 max-w-(--container-max) items-center justify-between px-5 md:px-10"
        style={{ maxWidth: "var(--container-max)" }}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo-mark.png" alt="" width={28} height={24} className="h-6 w-auto" priority />
          <Image src="/logo-wordmark.png" alt="TECHNE" width={800} height={135} className="h-4 w-auto" priority />
        </Link>

        <nav className="hidden gap-8 text-sm text-on-surface-variant md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="transition-opacity hover:opacity-60">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/cart" aria-label="Sepetim" className="relative flex h-6 w-6 items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path
              d="M6 8h12l-1 12H7L6 8Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M9 8V6a3 3 0 0 1 6 0v2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          {hydrated && totalCount > 0 && (
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-medium text-white">
              {totalCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
