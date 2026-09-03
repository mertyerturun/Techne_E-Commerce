import { describe, expect, test } from "vitest";
import { formatPrice, getProduct, products } from "./products";

describe("getProduct", () => {
  test("returns the matching product for a known slug", () => {
    const product = getProduct("techne-pro");
    expect(product?.slug).toBe("techne-pro");
    expect(product?.name.en).toBe("Techne Pro");
  });

  test("returns undefined for an unknown slug", () => {
    expect(getProduct("does-not-exist")).toBeUndefined();
  });
});

describe("formatPrice", () => {
  test("formats with Turkish grouping by default", () => {
    expect(formatPrice(49999)).toBe("₺49.999");
  });

  test("formats with Turkish grouping for locale 'tr'", () => {
    expect(formatPrice(49999, "tr")).toBe("₺49.999");
  });

  test("formats with English grouping for locale 'en'", () => {
    expect(formatPrice(49999, "en")).toBe("₺49,999");
  });

  test("rounds fractional amounts", () => {
    expect(formatPrice(1499.6, "en")).toBe("₺1,500");
  });
});

describe("product catalog data", () => {
  test("every product has both a Turkish and an English translation for its core copy", () => {
    for (const product of products) {
      for (const field of [product.name, product.tagline, product.description, product.cardTitle, product.cardSubtitle]) {
        expect(field.tr.length).toBeGreaterThan(0);
        expect(field.en.length).toBeGreaterThan(0);
      }
    }
  });

  test("slugs are unique", () => {
    const slugs = products.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
