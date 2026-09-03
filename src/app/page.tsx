"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import FluidFlowGrid from "@/components/ui/fluid-flow-grid";
import { getProduct, products } from "@/lib/products";
import { useLocale } from "@/lib/i18n";

export default function Home() {
  const { locale, t } = useLocale();
  const featured = products.filter((p) => p.featured);
  const gridProducts = products.filter(
    (p) => !p.featured && ["aura-buds", "timepiece-pro", "magpower"].includes(p.slug)
  );
  const technePro = getProduct("techne-pro")!;

  return (
    <div>
      {/* Hero */}
      <FluidFlowGrid heightClassName="h-[50vh] min-h-[420px]">
        <Reveal y={20} duration={0.9} start="top 95%">
          <Image
            src="/logo-wordmark.png"
            alt="TECHNE"
            width={800}
            height={135}
            className="mx-auto mb-3 h-3 w-auto brightness-0 invert opacity-60"
          />
          <h1 className="text-display-lg">{t.home.heroTitle}</h1>
        </Reveal>
      </FluidFlowGrid>

      <section className="bg-surface-tertiary px-5 pb-20 pt-16 text-center md:px-10">
        <Reveal y={20} delay={0.15} start="top 95%">
          <p className="mx-auto max-w-2xl text-headline-lg text-on-surface-variant">
            {t.home.heroSubtitle}
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button href={`/product/${technePro.slug}`} variant="primary">
              {t.home.buyNow}
            </Button>
            <Button href={`/product/${technePro.slug}`} variant="secondary">
              {t.home.learnMore}
            </Button>
          </div>
        </Reveal>
        <Reveal y={40} scale={0.96} delay={0.1} start="top 90%">
          <Parallax strength={24} className="relative mx-auto mt-16 aspect-16/9 w-full max-w-3xl">
            <Image src={technePro.image} alt={technePro.name[locale]} fill className="object-contain" />
          </Parallax>
        </Reveal>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-(--container-max) px-5 py-20 md:px-10">
        <Reveal>
          <h2 className="text-headline-xl">{t.home.featured}</h2>
        </Reveal>
        <Reveal stagger={0.15} y={40} scale={0.97} start="top 88%" className="mt-10 grid gap-6 md:grid-cols-2">
          {featured.map((product) => (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className={`card-ambient flex flex-col items-center overflow-hidden px-8 pt-14 text-center transition-shadow hover:shadow-lg ${
                product.featured === "dark" ? "bg-black text-white" : ""
              }`}
            >
              <h3 className="text-headline-lg">{product.cardTitle[locale]}</h3>
              <p
                className={`mt-1 text-body-md ${
                  product.featured === "dark" ? "text-white/70" : "text-on-surface-variant"
                }`}
              >
                {product.cardSubtitle[locale]}
              </p>
              <span className="mt-4 text-sm font-medium underline-offset-4 hover:underline">
                {t.home.buyNowArrow}
              </span>
              <div className="relative mt-8 aspect-16/10 w-full max-w-sm">
                <Image src={product.image} alt={product.name[locale]} fill className="object-contain" />
              </div>
            </Link>
          ))}
        </Reveal>
      </section>

      {/* Craftsmanship */}
      <section className="bg-surface-tertiary px-5 py-24 text-center md:px-10">
        <Reveal y={24} start="top 80%">
          <svg viewBox="0 0 24 24" fill="none" className="mx-auto h-10 w-10">
            <path
              d="M4 20 14 10M14 10l-2-2 4-4 4 4-4 4-2-2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <h2 className="mt-6 text-headline-xl">{t.home.craftsmanshipTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-on-surface-variant">
            {t.home.craftsmanshipBody}
          </p>
        </Reveal>
      </section>

      {/* Product grid */}
      <section id="urunler" className="mx-auto max-w-(--container-max) px-5 py-20 md:px-10">
        <Reveal stagger={0.1} y={32} start="top 88%" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gridProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </Reveal>
      </section>

      {/* Story CTA */}
      <section className="mx-auto max-w-(--container-max) px-5 py-24 text-center md:px-10">
        <Reveal y={24} start="top 85%">
          <h2 className="text-headline-xl">{t.home.lifestyleTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-body-lg text-on-surface-variant">
            {t.home.lifestyleBody}
          </p>
          <Link href="#" className="btn btn-ghost mt-6">
            {t.home.discoverStory}
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
