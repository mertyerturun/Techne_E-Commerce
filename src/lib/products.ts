export type StorageOption = {
  id: string;
  label: string;
  sublabel: string;
  priceDelta: number;
};

export type SpecRow = {
  label: string;
  value: string;
  detail: string;
};

export type Highlight = {
  icon: "eye" | "bolt" | "battery" | "chip";
  title: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  basePrice: number;
  image: string;
  cardTitle: string;
  cardSubtitle: string;
  storageOptions?: StorageOption[];
  highlights?: Highlight[];
  specs?: SpecRow[];
  featured?: "light" | "dark";
};

export const products: Product[] = [
  {
    slug: "techne-pro",
    name: "Techne Pro",
    tagline: "Pro gücü. Pro inceliği.",
    description:
      "Geleceğin teknolojisi şimdi ellerinizde. İnanılmaz performans, gün boyu pil ömrü ve kusursuz ekran.",
    category: "Bilgisayar",
    basePrice: 49999,
    image: "/products/techne-pro.webp",
    cardTitle: "Techne Pro",
    cardSubtitle: "Sınırları aşan performans.",
    featured: "light",
    storageOptions: [
      { id: "512gb", label: "512GB SSD", sublabel: "Dahili depolama", priceDelta: 0 },
      { id: "1tb", label: "1TB SSD", sublabel: "Dahili depolama", priceDelta: 6000 },
    ],
    highlights: [
      { icon: "eye", title: "Liquid Retina XDR", description: "Göz alıcı parlaklık." },
      { icon: "bolt", title: "Bağlantı. Hiç olmadığı kadar hızlı.", description: "Thunderbolt 4 ile sınırsız genişleme." },
    ],
    specs: [
      { label: "Çip", value: "Techne M-Pro çip", detail: "12 çekirdekli CPU, 18 çekirdekli GPU." },
      { label: "Bellek", value: "18GB birleşik bellek", detail: "Yoğun iş akışları için tasarlandı." },
      { label: "Depolama", value: "8 TB'a kadar SSD", detail: "Süper hızlı veri transferi ve geniş depolama alanı." },
      { label: "Ekran", value: "Liquid Retina XDR ekran", detail: "1.000.000:1 kontrast oranı ve 1.600 nit tepe parlaklık." },
      { label: "Pil Ömrü", value: "22 saate kadar pil ömrü", detail: "Film izleme veya kablosuz internette gezinme." },
    ],
  },
  {
    slug: "techne-air",
    name: "Techne Air",
    tagline: "Hafifliğin yeni tanımı.",
    description:
      "İnanılmaz derecede ince, şaşırtıcı derecede güçlü. Techne Air, her yere taşıyabileceğiniz kadar hafif.",
    category: "Tablet",
    basePrice: 32999,
    image: "/products/techne-air.webp",
    cardTitle: "Techne Air",
    cardSubtitle: "Hafifliğin yeni tanımı.",
    featured: "dark",
    storageOptions: [
      { id: "256gb", label: "256GB", sublabel: "Dahili depolama", priceDelta: 0 },
      { id: "512gb", label: "512GB", sublabel: "Dahili depolama", priceDelta: 4500 },
    ],
    highlights: [
      { icon: "chip", title: "Techne M-Air çip", description: "Masaüstü sınıfı performans, tablet inceliğinde." },
      { icon: "battery", title: "Tüm gün pil ömrü", description: "Kesintisiz kullanım için tasarlandı." },
    ],
    specs: [
      { label: "Çip", value: "Techne M-Air çip", detail: "8 çekirdekli CPU, 9 çekirdekli GPU." },
      { label: "Ekran", value: "10.9 inç Liquid Retina", detail: "True Tone ve geniş renk gamı desteği." },
      { label: "Ağırlık", value: "460 gram", detail: "Tek elle rahatça taşınabilir." },
      { label: "Pil Ömrü", value: "10 saate kadar pil ömrü", detail: "Web'de gezinme veya video izleme." },
    ],
  },
  {
    slug: "aura-buds",
    name: "Aura Buds",
    tagline: "Kusursuz sessizlik.",
    description: "Aktif gürültü engelleme ve saf ses netliği. Aura Buds ile dünyayı kapatın, müziğe odaklanın.",
    category: "Ses",
    basePrice: 4999,
    image: "/products/aura-buds.webp",
    cardTitle: "Aura Buds",
    cardSubtitle: "Kusursuz sessizlik.",
    highlights: [
      { icon: "battery", title: "Aktif Gürültü Engelleme", description: "Dış dünyayı sessize alın." },
      { icon: "bolt", title: "Hızlı Şarj", description: "5 dakikada 1 saatlik dinleme süresi." },
    ],
    specs: [
      { label: "Pil Ömrü", value: "6 saate kadar", detail: "Kutu ile birlikte 30 saate kadar toplam kullanım." },
      { label: "Bağlantı", value: "Bluetooth 5.3", detail: "Kararlı ve düşük gecikmeli bağlantı." },
    ],
  },
  {
    slug: "timepiece-pro",
    name: "Timepiece Pro",
    tagline: "Sağlığınız bileğinizde.",
    description: "Gelişmiş sağlık sensörleri ve şık tasarım bir arada. Her anınızı takip edin.",
    category: "Aksesuar",
    basePrice: 8999,
    image: "/products/timepiece-pro.webp",
    cardTitle: "Timepiece Pro",
    cardSubtitle: "Sağlığınız bileğinizde.",
    highlights: [
      { icon: "battery", title: "18 saate kadar pil ömrü", description: "Gün boyu kesintisiz kullanım." },
      { icon: "eye", title: "Her zaman açık ekran", description: "Bilgi tek bakışta önünüzde." },
    ],
    specs: [
      { label: "Ekran", value: "Retina LTPO ekran", detail: "1000 nit'e kadar parlaklık." },
      { label: "Su Direnci", value: "50 metre", detail: "Yüzme ve dalış için uygundur." },
    ],
  },
  {
    slug: "magpower",
    name: "MagPower",
    tagline: "Hızlı ve zarif.",
    description: "Mıknatıslı hizalama ile saniyeler içinde kablosuz şarj.",
    category: "Aksesuar",
    basePrice: 1499,
    image: "/products/magpower.svg",
    cardTitle: "MagPower",
    cardSubtitle: "Hızlı ve zarif.",
    specs: [{ label: "Çıkış Gücü", value: "15W", detail: "Uyumlu cihazlarda hızlı kablosuz şarj." }],
  },
  {
    slug: "magpower-bank",
    name: "MagPower Bank",
    tagline: "Enerjiniz her an yanınızda.",
    description:
      "20.000 mAh kapasiteli taşınabilir şarj bankası. Çift USB çıkışı ve hızlı PD şarj desteğiyle cihazlarınızı yolda güçlendirin.",
    category: "Aksesuar",
    basePrice: 3499,
    image: "/products/magpower-bank.webp",
    cardTitle: "MagPower Bank",
    cardSubtitle: "Hızlı ve güçlü taşınabilir şarj",
    specs: [
      { label: "Kapasite", value: "20.000 mAh", detail: "Çoklu şarj için yüksek kapasite." },
      { label: "Çıkış", value: "2x USB-A, 1x USB-C PD", detail: "Hızlı şarj destekli çoklu çıkış." },
    ],
  },
  {
    slug: "pro-sarj-kablosu",
    name: "Pro Şarj Kablosu",
    tagline: "Örgülü USB-C, 2m",
    description: "Dayanıklı örgülü kaplama ile uzun ömürlü hızlı şarj kablosu.",
    category: "Aksesuar",
    basePrice: 899,
    image: "/products/cable.svg",
    cardTitle: "Pro Şarj Kablosu",
    cardSubtitle: "Örgülü USB-C, 2m",
  },
  {
    slug: "seffaf-kilif",
    name: "Şeffaf Kılıf",
    tagline: "Kristal netliğinde koruma.",
    description: "Kristal netliğinde, sararmaya dayanıklı koruyucu telefon kılıfı.",
    category: "Aksesuar",
    basePrice: 1299,
    image: "/products/case.svg",
    cardTitle: "Şeffaf Kılıf",
    cardSubtitle: "Şıklık ve dayanıklılık bir arada",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(amount: number): string {
  return `₺${new Intl.NumberFormat("tr-TR").format(Math.round(amount))}`;
}
