"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Locale } from "./locale";

const STORAGE_KEY = "techne-locale";

type UIDict = {
  nav: { store: string; accessories: string; cart: string };
  footer: { rights: (year: number) => string; country: string };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    buyNow: string;
    learnMore: string;
    featured: string;
    buyNowArrow: string;
    craftsmanshipTitle: string;
    craftsmanshipBody: string;
    lifestyleTitle: string;
    lifestyleBody: string;
    discoverStory: string;
  };
  product: {
    overview: string;
    techSpecsNav: string;
    buyNow: string;
    startingPrice: (price: string) => string;
    featuresTitle: string;
    storage: string;
    vatIncluded: string;
    freeShipping: string;
    addToCart: string;
    added: string;
    techSpecsTitle: string;
  };
  cart: {
    title: string;
    subtitle: string;
    empty: string;
    emptyBody: string;
    startShopping: string;
    qtyAriaLabel: (name: string) => string;
    remove: string;
    orderSummary: string;
    subtotal: string;
    shipping: string;
    free: string;
    total: string;
    checkout: string;
    alsoLike: string;
    add: string;
  };
};

const dictionaries: Record<Locale, UIDict> = {
  tr: {
    nav: { store: "Mağaza", accessories: "Aksesuarlar", cart: "Sepetim" },
    footer: {
      rights: (year) => `© ${year} TECHNE A.Ş. Tüm hakları saklıdır.`,
      country: "Türkiye",
    },
    home: {
      heroTitle: "Gelecek Burada.",
      heroSubtitle: "Yeni Nesil Deneyim. İnanılmaz güç, kusursuz tasarım.",
      buyNow: "Satın Al",
      learnMore: "Daha Fazla Bilgi",
      featured: "Öne Çıkarılan",
      buyNowArrow: "Satın Al ›",
      craftsmanshipTitle: "Kusursuz İşçilik.",
      craftsmanshipBody:
        "Her bir detay, mükemmellik arayışımızın bir yansımasıdır. Tasarımın sınırlarını zorluyor, teknolojiyi sanatla buluşturuyoruz.",
      lifestyleTitle: "Bir yaşam tarzı.",
      lifestyleBody:
        "TECHNE'de teknolojiyi sanatla buluşturuyoruz. Sadece bir cihaz değil, bir yaşam tarzı sunuyoruz.",
      discoverStory: "Hikayemizi Keşfedin →",
    },
    product: {
      overview: "Genel Bakış",
      techSpecsNav: "Teknik Özellikler",
      buyNow: "Satın Al",
      startingPrice: (price) => `${price}'dan başlayan fiyatlarla`,
      featuresTitle: "Sınırları aşan özellikler.",
      storage: "Depolama",
      vatIncluded: "KDV Dahil",
      freeShipping: "Ücretsiz Kargo",
      addToCart: "Sepete Ekle",
      added: "Eklendi ✓",
      techSpecsTitle: "Teknik Özellikler.",
    },
    cart: {
      title: "Alışveriş Çantanız.",
      subtitle: "Siparişiniz ücretsiz gönderim için uygundur.",
      empty: "Sepetiniz boş.",
      emptyBody: "Ürünlerimize göz atın ve favorilerinizi sepetinize ekleyin.",
      startShopping: "Alışverişe Başla",
      qtyAriaLabel: (name) => `${name} adet`,
      remove: "Kaldır",
      orderSummary: "Sipariş Özeti",
      subtotal: "Ara Toplam",
      shipping: "Gönderim",
      free: "Ücretsiz",
      total: "Toplam",
      checkout: "Ödemeye Geç",
      alsoLike: "Bunları da beğenebilirsiniz.",
      add: "Ekle",
    },
  },
  en: {
    nav: { store: "Store", accessories: "Accessories", cart: "My Cart" },
    footer: {
      rights: (year) => `© ${year} TECHNE Inc. All rights reserved.`,
      country: "Turkey",
    },
    home: {
      heroTitle: "The Future Is Here.",
      heroSubtitle: "Next-Gen Experience. Incredible power, flawless design.",
      buyNow: "Buy Now",
      learnMore: "Learn More",
      featured: "Featured",
      buyNowArrow: "Buy Now ›",
      craftsmanshipTitle: "Flawless Craftsmanship.",
      craftsmanshipBody:
        "Every detail reflects our pursuit of perfection. We push the boundaries of design, merging technology with art.",
      lifestyleTitle: "A way of life.",
      lifestyleBody:
        "At TECHNE, we bring technology and art together. Not just a device — a way of life.",
      discoverStory: "Discover Our Story →",
    },
    product: {
      overview: "Overview",
      techSpecsNav: "Tech Specs",
      buyNow: "Buy Now",
      startingPrice: (price) => `Starting at ${price}`,
      featuresTitle: "Features that push limits.",
      storage: "Storage",
      vatIncluded: "VAT Included",
      freeShipping: "Free Shipping",
      addToCart: "Add to Cart",
      added: "Added ✓",
      techSpecsTitle: "Tech Specs.",
    },
    cart: {
      title: "Your Shopping Bag.",
      subtitle: "Your order qualifies for free shipping.",
      empty: "Your bag is empty.",
      emptyBody: "Browse our products and add your favorites to your bag.",
      startShopping: "Start Shopping",
      qtyAriaLabel: (name) => `${name} quantity`,
      remove: "Remove",
      orderSummary: "Order Summary",
      subtotal: "Subtotal",
      shipping: "Shipping",
      free: "Free",
      total: "Total",
      checkout: "Checkout",
      alsoLike: "You might also like.",
      add: "Add",
    },
  },
};

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: UIDict;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "tr" || stored === "en") setLocaleState(stored);
    } catch {
      // ignore
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore
    }
  }, [locale, hydrated]);

  const value: LocaleContextValue = {
    locale,
    setLocale: setLocaleState,
    toggleLocale: () => setLocaleState((prev) => (prev === "tr" ? "en" : "tr")),
    t: dictionaries[locale],
  };

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
