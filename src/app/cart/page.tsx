"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import Reveal from "@/components/motion/Reveal";
import { useCart } from "@/lib/cart-context";
import { formatPrice, getProduct } from "@/lib/products";

const upsellSlugs = ["magpower-bank", "pro-sarj-kablosu", "seffaf-kilif"];

export default function CartPage() {
  const { lines, hydrated, setQty, removeItem, addItem, subtotal } = useCart();
  const upsellProducts = upsellSlugs.map((slug) => getProduct(slug)!);

  return (
    <div className="mx-auto max-w-(--container-max) px-5 py-16 md:px-10">
      <Reveal y={20} duration={0.9} start="top 95%">
        <h1 className="text-display-lg">Alışveriş Çantanız.</h1>
        <p className="mt-3 text-body-lg text-on-surface-variant">
          Siparişiniz ücretsiz gönderim için uygundur.
        </p>
      </Reveal>

      {hydrated && lines.length === 0 ? (
        <Reveal y={24} scale={0.98} className="card-ambient mt-12 flex flex-col items-center gap-4 p-16 text-center">
          <p className="text-headline-lg">Sepetiniz boş.</p>
          <p className="text-body-md text-on-surface-variant">
            Ürünlerimize göz atın ve favorilerinizi sepetinize ekleyin.
          </p>
          <Button href="/" variant="primary" className="mt-2">
            Alışverişe Başla
          </Button>
        </Reveal>
      ) : (
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_360px]">
          <Reveal key={lines.length} stagger={0.08} y={20} start="top 95%" className="flex flex-col gap-6">
            {lines.map((line) => (
              <div key={line.id} className="card-ambient flex gap-6 p-6">
                <div className="relative h-28 w-28 shrink-0">
                  <Image src={line.image} alt={line.name} fill className="object-contain" />
                </div>
                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold">{line.name}</h3>
                      {line.variantLabel && (
                        <p className="mt-1 text-sm text-on-surface-variant">{line.variantLabel}</p>
                      )}
                    </div>
                    <p className="font-medium whitespace-nowrap">
                      {formatPrice(line.unitPrice * line.qty)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <select
                      value={line.qty}
                      onChange={(e) => setQty(line.id, Number(e.target.value))}
                      className="rounded-md border border-black/10 bg-white px-3 py-1.5 text-sm"
                      aria-label={`${line.name} adet`}
                    >
                      {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => removeItem(line.id)}
                      className="text-sm text-on-surface-variant underline-offset-4 hover:text-on-surface hover:underline"
                    >
                      Kaldır
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal y={24} scale={0.97} start="top 90%" className="card-ambient h-fit p-6">
            <h2 className="text-headline-lg">Sipariş Özeti</h2>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Ara Toplam</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Gönderim</span>
                <span>Ücretsiz</span>
              </div>
            </div>
            <div className="mt-4 flex justify-between border-t border-black/10 pt-4 font-semibold">
              <span>Toplam</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <Button variant="primary" className="mt-6 w-full">
              Ödemeye Geç
            </Button>
          </Reveal>
        </div>
      )}

      {/* Upsell */}
      <section className="mt-24">
        <Reveal>
          <h2 className="text-headline-lg">Bunları da beğenebilirsiniz.</h2>
        </Reveal>
        <Reveal stagger={0.1} y={28} start="top 90%" className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upsellProducts.map((product) => (
            <div key={product.slug} className="card-ambient flex flex-col items-center p-8 text-center">
              <Link href={`/product/${product.slug}`} className="relative aspect-square w-full max-w-[160px]">
                <Image src={product.image} alt={product.name} fill className="object-contain" />
              </Link>
              <h3 className="mt-4 font-semibold">{product.cardTitle}</h3>
              <p className="mt-1 text-sm text-on-surface-variant">{product.cardSubtitle}</p>
              <p className="mt-3 font-medium">{formatPrice(product.basePrice)}</p>
              <button
                onClick={() =>
                  addItem(
                    {
                      id: product.slug,
                      slug: product.slug,
                      name: product.name,
                      unitPrice: product.basePrice,
                      image: product.image,
                    },
                    1
                  )
                }
                className="btn btn-secondary mt-4 !py-2 !px-6 text-sm"
              >
                Ekle
              </button>
            </div>
          ))}
        </Reveal>
      </section>
    </div>
  );
}
