"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Button from "@/components/Button";
import HighlightIcon from "@/components/HighlightIcon";
import Reveal from "@/components/motion/Reveal";
import { formatPrice, type Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

export default function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [storageId, setStorageId] = useState(product.storageOptions?.[0]?.id);
  const [justAdded, setJustAdded] = useState(false);

  const selectedStorage = product.storageOptions?.find((s) => s.id === storageId);
  const price = product.basePrice + (selectedStorage?.priceDelta ?? 0);

  const lineId = useMemo(
    () => (selectedStorage ? `${product.slug}-${selectedStorage.id}` : product.slug),
    [product.slug, selectedStorage]
  );

  function handleAddToCart() {
    addItem(
      {
        id: lineId,
        slug: product.slug,
        name: product.name,
        variantLabel: selectedStorage?.label,
        unitPrice: price,
        image: product.image,
      },
      1
    );
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  }

  return (
    <div>
      {/* Sub nav */}
      <div className="sticky top-14 z-40 border-b border-black/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-(--container-max) items-center justify-between px-5 md:px-10">
          <span className="font-medium">{product.name}</span>
          <div className="hidden items-center gap-6 text-sm text-on-surface-variant md:flex">
            <a href="#overview" className="hover:text-on-surface">
              Genel Bakış
            </a>
            {product.specs && (
              <a href="#tech-specs" className="hover:text-on-surface">
                Teknik Özellikler
              </a>
            )}
          </div>
          <a href="#buy" className="btn btn-primary !py-2 !px-5 text-sm">
            Satın Al
          </a>
        </div>
      </div>

      {/* Hero */}
      <section id="overview" className="px-5 pb-10 pt-16 text-center md:px-10">
        <Reveal y={20} duration={0.9} start="top 95%">
          <h1 className="mx-auto max-w-3xl text-display-lg">{product.tagline}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-body-lg text-on-surface-variant">
            {product.description}
          </p>
          <p className="mt-8 text-headline-lg">
            {formatPrice(product.basePrice)}&apos;dan başlayan fiyatlarla
          </p>
        </Reveal>
        <Reveal y={40} scale={0.96} delay={0.1} start="top 90%">
          <div className="relative mx-auto mt-14 aspect-16/9 w-full max-w-4xl">
            <Image src={product.image} alt={product.name} fill className="object-contain" priority />
          </div>
        </Reveal>
      </section>

      {/* Highlights */}
      {product.highlights && (
        <section className="bg-surface-tertiary px-5 py-20 md:px-10">
          <Reveal>
            <h2 className="mx-auto max-w-(--container-max) text-headline-xl">
              Sınırları aşan özellikler.
            </h2>
          </Reveal>
          <Reveal
            stagger={0.15}
            y={36}
            scale={0.97}
            start="top 88%"
            className="mx-auto mt-10 grid max-w-(--container-max) gap-6 md:grid-cols-2"
          >
            {product.highlights.map((h, i) => (
              <div key={h.title} className="card-ambient overflow-hidden p-8">
                {i === 0 ? (
                  <div className="flex flex-col items-center text-center">
                    <HighlightIcon icon={h.icon} />
                    <h3 className="mt-4 text-headline-lg">{h.title}</h3>
                    <p className="mt-1 text-body-md text-on-surface-variant">{h.description}</p>
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <h3 className="text-headline-lg">{h.title}</h3>
                      <p className="mt-1 text-body-md text-on-surface-variant">{h.description}</p>
                    </div>
                    <div className="relative hidden h-24 w-32 shrink-0 sm:block">
                      <Image src={product.image} alt="" fill className="object-contain opacity-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </Reveal>
        </section>
      )}

      {/* Configure & buy */}
      <section id="buy" className="mx-auto max-w-(--container-max) px-5 py-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1fr_320px]">
          <div>
            {product.storageOptions && (
              <>
                <Reveal>
                  <h2 className="text-headline-lg">Depolama</h2>
                </Reveal>
                <Reveal stagger={0.1} y={20} start="top 90%" className="mt-6 grid gap-4 sm:grid-cols-2">
                  {product.storageOptions.map((option) => {
                    const selected = option.id === storageId;
                    return (
                      <button
                        key={option.id}
                        onClick={() => setStorageId(option.id)}
                        className={`rounded-lg border px-6 py-5 text-left transition-colors ${
                          selected ? "border-black" : "border-black/10 hover:border-black/30"
                        }`}
                      >
                        <p className="font-medium">{option.label}</p>
                        <p className="mt-1 text-sm text-on-surface-variant">
                          {option.priceDelta > 0 ? `+ ${formatPrice(option.priceDelta)}` : option.sublabel}
                        </p>
                      </button>
                    );
                  })}
                </Reveal>
              </>
            )}
          </div>

          <Reveal y={24} scale={0.97} start="top 90%" className="card-ambient sticky top-32 h-fit p-6">
            <p className="text-headline-lg">{formatPrice(price)}</p>
            <div className="mt-2 space-y-0.5 text-right text-sm text-on-surface-variant">
              <p>KDV Dahil</p>
              <p>Ücretsiz Kargo</p>
            </div>
            <Button variant="primary" className="mt-6 w-full" onClick={handleAddToCart}>
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path
                  d="M6 8h12l-1 12H7L6 8Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {justAdded ? "Eklendi ✓" : "Sepete Ekle"}
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Tech specs */}
      {product.specs && (
        <section id="tech-specs" className="mx-auto max-w-(--container-max) px-5 py-20 md:px-10">
          <Reveal>
            <h2 className="text-headline-xl">Teknik Özellikler.</h2>
          </Reveal>
          <Reveal
            stagger={0.06}
            y={16}
            duration={0.5}
            start="top 90%"
            className="mt-10 divide-y divide-black/5 border-t border-black/5"
          >
            {product.specs.map((spec) => (
              <div key={spec.label} className="grid gap-1 py-6 md:grid-cols-2 md:gap-8">
                <p className="font-semibold">{spec.label}</p>
                <div>
                  <p>{spec.value}</p>
                  <p className="mt-1 text-sm text-on-surface-variant">{spec.detail}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </section>
      )}
    </div>
  );
}
