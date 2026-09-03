import type { Highlight } from "@/lib/products";

export default function HighlightIcon({ icon }: { icon: Highlight["icon"] }) {
  const common = { viewBox: "0 0 24 24", fill: "none" as const, className: "h-8 w-8" };

  switch (icon) {
    case "eye":
      return (
        <svg {...common}>
          <path
            d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path
            d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "battery":
      return (
        <svg {...common}>
          <rect x="2" y="8" width="17" height="8" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M21 10v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="5" y="10.5" width="8" height="3" fill="currentColor" />
        </svg>
      );
    case "chip":
      return (
        <svg {...common}>
          <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}
