"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/lib/products";
import { useLocale } from "@/lib/i18n";

export default function ProductCard({ product }: { product: Product }) {
  const { locale } = useLocale();

  return (
    <Link
      href={`/product/${product.slug}`}
      className="card-ambient group flex flex-col overflow-hidden p-8 transition-shadow hover:shadow-lg"
    >
      <div className="relative mb-6 aspect-square w-full">
        <Image
          src={product.image}
          alt={product.name[locale]}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <h3 className="text-headline-lg">{product.cardTitle[locale]}</h3>
      <p className="mt-1 text-body-md text-on-surface-variant">{product.cardSubtitle[locale]}</p>
      <p className="mt-4 text-body-md font-medium">{formatPrice(product.basePrice, locale)}</p>
    </Link>
  );
}
