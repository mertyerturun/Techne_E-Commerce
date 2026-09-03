import { act, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { CartProvider, useCart } from "./cart-context";

const line = {
  id: "techne-pro-512gb",
  slug: "techne-pro",
  name: "Techne Pro",
  unitPrice: 49999,
  image: "/products/techne-pro.webp",
};

beforeEach(() => {
  window.localStorage.clear();
});

function renderCart() {
  return renderHook(() => useCart(), { wrapper: CartProvider });
}

describe("CartProvider", () => {
  test("starts empty and hydrates from localStorage", async () => {
    const { result } = renderCart();
    await waitFor(() => expect(result.current.hydrated).toBe(true));
    expect(result.current.lines).toEqual([]);
    expect(result.current.subtotal).toBe(0);
    expect(result.current.totalCount).toBe(0);
  });

  test("addItem adds a new line and increments qty on repeat adds", async () => {
    const { result } = renderCart();
    await waitFor(() => expect(result.current.hydrated).toBe(true));

    act(() => result.current.addItem(line, 1));
    expect(result.current.lines).toHaveLength(1);
    expect(result.current.totalCount).toBe(1);

    act(() => result.current.addItem(line, 2));
    expect(result.current.lines).toHaveLength(1);
    expect(result.current.lines[0].qty).toBe(3);
    expect(result.current.totalCount).toBe(3);
    expect(result.current.subtotal).toBe(line.unitPrice * 3);
  });

  test("setQty updates quantity, and setting it to 0 removes the line", async () => {
    const { result } = renderCart();
    await waitFor(() => expect(result.current.hydrated).toBe(true));

    act(() => result.current.addItem(line, 1));
    act(() => result.current.setQty(line.id, 5));
    expect(result.current.lines[0].qty).toBe(5);

    act(() => result.current.setQty(line.id, 0));
    expect(result.current.lines).toEqual([]);
  });

  test("removeItem removes the matching line only", async () => {
    const { result } = renderCart();
    await waitFor(() => expect(result.current.hydrated).toBe(true));

    act(() => result.current.addItem(line, 1));
    act(() => result.current.addItem({ ...line, id: "other-product" }, 1));
    expect(result.current.lines).toHaveLength(2);

    act(() => result.current.removeItem(line.id));
    expect(result.current.lines).toHaveLength(1);
    expect(result.current.lines[0].id).toBe("other-product");
  });

  test("clear empties the cart", async () => {
    const { result } = renderCart();
    await waitFor(() => expect(result.current.hydrated).toBe(true));

    act(() => result.current.addItem(line, 2));
    act(() => result.current.clear());
    expect(result.current.lines).toEqual([]);
  });

  test("persists lines to localStorage after hydration", async () => {
    const { result } = renderCart();
    await waitFor(() => expect(result.current.hydrated).toBe(true));

    act(() => result.current.addItem(line, 1));
    await waitFor(() => {
      const stored = JSON.parse(window.localStorage.getItem("techne-cart") ?? "[]");
      expect(stored).toHaveLength(1);
      expect(stored[0].id).toBe(line.id);
    });
  });
});
