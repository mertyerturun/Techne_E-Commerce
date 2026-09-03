import type { Locale, Localized } from "./locale";

export type StorageOption = {
  id: string;
  label: Localized;
  sublabel: Localized;
  priceDelta: number;
};

export type SpecRow = {
  label: Localized;
  value: Localized;
  detail: Localized;
};

export type Highlight = {
  icon: "eye" | "bolt" | "battery" | "chip";
  title: Localized;
  description: Localized;
};

export type Product = {
  slug: string;
  name: Localized;
  tagline: Localized;
  description: Localized;
  category: Localized;
  basePrice: number;
  image: string;
  cardTitle: Localized;
  cardSubtitle: Localized;
  storageOptions?: StorageOption[];
  highlights?: Highlight[];
  specs?: SpecRow[];
  featured?: "light" | "dark";
};

export const products: Product[] = [
  {
    slug: "techne-pro",
    name: { tr: "Techne Pro", en: "Techne Pro" },
    tagline: { tr: "Pro gücü. Pro inceliği.", en: "Pro power. Pro elegance." },
    description: {
      tr: "Geleceğin teknolojisi şimdi ellerinizde. İnanılmaz performans, gün boyu pil ömrü ve kusursuz ekran.",
      en: "The technology of the future, now in your hands. Incredible performance, all-day battery life, and a flawless display.",
    },
    category: { tr: "Bilgisayar", en: "Computer" },
    basePrice: 49999,
    image: "/products/techne-pro.webp",
    cardTitle: { tr: "Techne Pro", en: "Techne Pro" },
    cardSubtitle: { tr: "Sınırları aşan performans.", en: "Performance beyond limits." },
    featured: "light",
    storageOptions: [
      {
        id: "512gb",
        label: { tr: "512GB SSD", en: "512GB SSD" },
        sublabel: { tr: "Dahili depolama", en: "Internal storage" },
        priceDelta: 0,
      },
      {
        id: "1tb",
        label: { tr: "1TB SSD", en: "1TB SSD" },
        sublabel: { tr: "Dahili depolama", en: "Internal storage" },
        priceDelta: 6000,
      },
    ],
    highlights: [
      {
        icon: "eye",
        title: { tr: "Liquid Retina XDR", en: "Liquid Retina XDR" },
        description: { tr: "Göz alıcı parlaklık.", en: "Stunning brightness." },
      },
      {
        icon: "bolt",
        title: { tr: "Bağlantı. Hiç olmadığı kadar hızlı.", en: "Connectivity. Faster than ever." },
        description: { tr: "Thunderbolt 4 ile sınırsız genişleme.", en: "Unlimited expansion with Thunderbolt 4." },
      },
    ],
    specs: [
      {
        label: { tr: "Çip", en: "Chip" },
        value: { tr: "Techne M-Pro çip", en: "Techne M-Pro chip" },
        detail: { tr: "12 çekirdekli CPU, 18 çekirdekli GPU.", en: "12-core CPU, 18-core GPU." },
      },
      {
        label: { tr: "Bellek", en: "Memory" },
        value: { tr: "18GB birleşik bellek", en: "18GB unified memory" },
        detail: { tr: "Yoğun iş akışları için tasarlandı.", en: "Designed for demanding workflows." },
      },
      {
        label: { tr: "Depolama", en: "Storage" },
        value: { tr: "8 TB'a kadar SSD", en: "Up to 8TB SSD" },
        detail: {
          tr: "Süper hızlı veri transferi ve geniş depolama alanı.",
          en: "Blazing-fast data transfer and ample storage.",
        },
      },
      {
        label: { tr: "Ekran", en: "Display" },
        value: { tr: "Liquid Retina XDR ekran", en: "Liquid Retina XDR display" },
        detail: {
          tr: "1.000.000:1 kontrast oranı ve 1.600 nit tepe parlaklık.",
          en: "1,000,000:1 contrast ratio and 1,600 nits peak brightness.",
        },
      },
      {
        label: { tr: "Pil Ömrü", en: "Battery Life" },
        value: { tr: "22 saate kadar pil ömrü", en: "Up to 22 hours of battery life" },
        detail: { tr: "Film izleme veya kablosuz internette gezinme.", en: "Watching movies or wireless web browsing." },
      },
    ],
  },
  {
    slug: "techne-air",
    name: { tr: "Techne Air", en: "Techne Air" },
    tagline: { tr: "Hafifliğin yeni tanımı.", en: "A new definition of light." },
    description: {
      tr: "İnanılmaz derecede ince, şaşırtıcı derecede güçlü. Techne Air, her yere taşıyabileceğiniz kadar hafif.",
      en: "Incredibly thin, surprisingly powerful. Techne Air is light enough to take anywhere.",
    },
    category: { tr: "Tablet", en: "Tablet" },
    basePrice: 32999,
    image: "/products/techne-air.webp",
    cardTitle: { tr: "Techne Air", en: "Techne Air" },
    cardSubtitle: { tr: "Hafifliğin yeni tanımı.", en: "A new definition of light." },
    featured: "dark",
    storageOptions: [
      {
        id: "256gb",
        label: { tr: "256GB", en: "256GB" },
        sublabel: { tr: "Dahili depolama", en: "Internal storage" },
        priceDelta: 0,
      },
      {
        id: "512gb",
        label: { tr: "512GB", en: "512GB" },
        sublabel: { tr: "Dahili depolama", en: "Internal storage" },
        priceDelta: 4500,
      },
    ],
    highlights: [
      {
        icon: "chip",
        title: { tr: "Techne M-Air çip", en: "Techne M-Air chip" },
        description: {
          tr: "Masaüstü sınıfı performans, tablet inceliğinde.",
          en: "Desktop-class performance in tablet-thin design.",
        },
      },
      {
        icon: "battery",
        title: { tr: "Tüm gün pil ömrü", en: "All-day battery life" },
        description: { tr: "Kesintisiz kullanım için tasarlandı.", en: "Designed for uninterrupted use." },
      },
    ],
    specs: [
      {
        label: { tr: "Çip", en: "Chip" },
        value: { tr: "Techne M-Air çip", en: "Techne M-Air chip" },
        detail: { tr: "8 çekirdekli CPU, 9 çekirdekli GPU.", en: "8-core CPU, 9-core GPU." },
      },
      {
        label: { tr: "Ekran", en: "Display" },
        value: { tr: "10.9 inç Liquid Retina", en: "10.9-inch Liquid Retina" },
        detail: { tr: "True Tone ve geniş renk gamı desteği.", en: "True Tone and wide color gamut support." },
      },
      {
        label: { tr: "Ağırlık", en: "Weight" },
        value: { tr: "460 gram", en: "460 grams" },
        detail: { tr: "Tek elle rahatça taşınabilir.", en: "Comfortable to hold with one hand." },
      },
      {
        label: { tr: "Pil Ömrü", en: "Battery Life" },
        value: { tr: "10 saate kadar pil ömrü", en: "Up to 10 hours of battery life" },
        detail: { tr: "Web'de gezinme veya video izleme.", en: "Web browsing or watching video." },
      },
    ],
  },
  {
    slug: "aura-buds",
    name: { tr: "Aura Buds", en: "Aura Buds" },
    tagline: { tr: "Kusursuz sessizlik.", en: "Flawless silence." },
    description: {
      tr: "Aktif gürültü engelleme ve saf ses netliği. Aura Buds ile dünyayı kapatın, müziğe odaklanın.",
      en: "Active noise cancellation and pure sound clarity. Shut out the world and focus on your music with Aura Buds.",
    },
    category: { tr: "Ses", en: "Audio" },
    basePrice: 4999,
    image: "/products/aura-buds.webp",
    cardTitle: { tr: "Aura Buds", en: "Aura Buds" },
    cardSubtitle: { tr: "Kusursuz sessizlik.", en: "Flawless silence." },
    highlights: [
      {
        icon: "battery",
        title: { tr: "Aktif Gürültü Engelleme", en: "Active Noise Cancellation" },
        description: { tr: "Dış dünyayı sessize alın.", en: "Silence the outside world." },
      },
      {
        icon: "bolt",
        title: { tr: "Hızlı Şarj", en: "Fast Charging" },
        description: { tr: "5 dakikada 1 saatlik dinleme süresi.", en: "1 hour of listening in 5 minutes." },
      },
    ],
    specs: [
      {
        label: { tr: "Pil Ömrü", en: "Battery Life" },
        value: { tr: "6 saate kadar", en: "Up to 6 hours" },
        detail: { tr: "Kutu ile birlikte 30 saate kadar toplam kullanım.", en: "Up to 30 hours total with the case." },
      },
      {
        label: { tr: "Bağlantı", en: "Connectivity" },
        value: { tr: "Bluetooth 5.3", en: "Bluetooth 5.3" },
        detail: { tr: "Kararlı ve düşük gecikmeli bağlantı.", en: "Stable, low-latency connection." },
      },
    ],
  },
  {
    slug: "timepiece-pro",
    name: { tr: "Timepiece Pro", en: "Timepiece Pro" },
    tagline: { tr: "Sağlığınız bileğinizde.", en: "Your health, on your wrist." },
    description: {
      tr: "Gelişmiş sağlık sensörleri ve şık tasarım bir arada. Her anınızı takip edin.",
      en: "Advanced health sensors meet sleek design. Track every moment.",
    },
    category: { tr: "Aksesuar", en: "Accessory" },
    basePrice: 8999,
    image: "/products/timepiece-pro.webp",
    cardTitle: { tr: "Timepiece Pro", en: "Timepiece Pro" },
    cardSubtitle: { tr: "Sağlığınız bileğinizde.", en: "Your health, on your wrist." },
    highlights: [
      {
        icon: "battery",
        title: { tr: "18 saate kadar pil ömrü", en: "Up to 18 hours of battery life" },
        description: { tr: "Gün boyu kesintisiz kullanım.", en: "Uninterrupted use all day long." },
      },
      {
        icon: "eye",
        title: { tr: "Her zaman açık ekran", en: "Always-on display" },
        description: { tr: "Bilgi tek bakışta önünüzde.", en: "Information at a glance." },
      },
    ],
    specs: [
      {
        label: { tr: "Ekran", en: "Display" },
        value: { tr: "Retina LTPO ekran", en: "Retina LTPO display" },
        detail: { tr: "1000 nit'e kadar parlaklık.", en: "Up to 1,000 nits of brightness." },
      },
      {
        label: { tr: "Su Direnci", en: "Water Resistance" },
        value: { tr: "50 metre", en: "50 meters" },
        detail: { tr: "Yüzme ve dalış için uygundur.", en: "Suitable for swimming and diving." },
      },
    ],
  },
  {
    slug: "magpower",
    name: { tr: "MagPower", en: "MagPower" },
    tagline: { tr: "Hızlı ve zarif.", en: "Fast and elegant." },
    description: {
      tr: "Mıknatıslı hizalama ile saniyeler içinde kablosuz şarj.",
      en: "Wireless charging in seconds with magnetic alignment.",
    },
    category: { tr: "Aksesuar", en: "Accessory" },
    basePrice: 1499,
    image: "/products/magpower.svg",
    cardTitle: { tr: "MagPower", en: "MagPower" },
    cardSubtitle: { tr: "Hızlı ve zarif.", en: "Fast and elegant." },
    specs: [
      {
        label: { tr: "Çıkış Gücü", en: "Output Power" },
        value: { tr: "15W", en: "15W" },
        detail: { tr: "Uyumlu cihazlarda hızlı kablosuz şarj.", en: "Fast wireless charging on compatible devices." },
      },
    ],
  },
  {
    slug: "magpower-bank",
    name: { tr: "MagPower Bank", en: "MagPower Bank" },
    tagline: { tr: "Enerjiniz her an yanınızda.", en: "Your power, always with you." },
    description: {
      tr: "20.000 mAh kapasiteli taşınabilir şarj bankası. Çift USB çıkışı ve hızlı PD şarj desteğiyle cihazlarınızı yolda güçlendirin.",
      en: "A 20,000 mAh portable power bank. Keep your devices charged on the go with dual USB output and fast PD charging support.",
    },
    category: { tr: "Aksesuar", en: "Accessory" },
    basePrice: 3499,
    image: "/products/magpower-bank.webp",
    cardTitle: { tr: "MagPower Bank", en: "MagPower Bank" },
    cardSubtitle: { tr: "Hızlı ve güçlü taşınabilir şarj", en: "Fast, powerful portable charging" },
    specs: [
      {
        label: { tr: "Kapasite", en: "Capacity" },
        value: { tr: "20.000 mAh", en: "20,000 mAh" },
        detail: { tr: "Çoklu şarj için yüksek kapasite.", en: "High capacity for multiple charges." },
      },
      {
        label: { tr: "Çıkış", en: "Output" },
        value: { tr: "2x USB-A, 1x USB-C PD", en: "2x USB-A, 1x USB-C PD" },
        detail: { tr: "Hızlı şarj destekli çoklu çıkış.", en: "Multiple outputs with fast-charge support." },
      },
    ],
  },
  {
    slug: "pro-sarj-kablosu",
    name: { tr: "Pro Şarj Kablosu", en: "Pro Charge Cable" },
    tagline: { tr: "Örgülü USB-C, 2m", en: "Braided USB-C, 2m" },
    description: {
      tr: "Dayanıklı örgülü kaplama ile uzun ömürlü hızlı şarj kablosu.",
      en: "A long-lasting fast-charge cable with a durable braided coating.",
    },
    category: { tr: "Aksesuar", en: "Accessory" },
    basePrice: 899,
    image: "/products/cable.svg",
    cardTitle: { tr: "Pro Şarj Kablosu", en: "Pro Charge Cable" },
    cardSubtitle: { tr: "Örgülü USB-C, 2m", en: "Braided USB-C, 2m" },
  },
  {
    slug: "seffaf-kilif",
    name: { tr: "Şeffaf Kılıf", en: "Clear Case" },
    tagline: { tr: "Kristal netliğinde koruma.", en: "Crystal-clear protection." },
    description: {
      tr: "Kristal netliğinde, sararmaya dayanıklı koruyucu telefon kılıfı.",
      en: "A crystal-clear, yellowing-resistant protective phone case.",
    },
    category: { tr: "Aksesuar", en: "Accessory" },
    basePrice: 1299,
    image: "/products/case.svg",
    cardTitle: { tr: "Şeffaf Kılıf", en: "Clear Case" },
    cardSubtitle: { tr: "Şıklık ve dayanıklılık bir arada", en: "Style and durability combined" },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(amount: number, locale: Locale = "tr"): string {
  return `₺${new Intl.NumberFormat(locale === "en" ? "en-US" : "tr-TR").format(Math.round(amount))}`;
}
