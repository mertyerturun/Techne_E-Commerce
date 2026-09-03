"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLocale();

  return (
    <footer className="mt-auto bg-surface-tertiary">
      <div className="mx-auto max-w-(--container-max) px-5 py-16 md:px-10">
        <div className="flex items-center gap-2">
          <Image src="/logo-mark.png" alt="" width={28} height={24} className="h-6 w-auto" />
          <Image src="/logo-wordmark.png" alt="TECHNE" width={800} height={135} className="h-4 w-auto" />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-black/10 pt-6 text-xs text-on-surface-variant md:flex-row md:items-center md:justify-between">
          <p>{t.footer.rights(new Date().getFullYear())}</p>
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9s-1.25 6.5-3.75 9c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
            <span>{t.footer.country}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
