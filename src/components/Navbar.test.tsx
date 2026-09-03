import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import Navbar from "./Navbar";
import { CartProvider } from "@/lib/cart-context";
import { LocaleProvider } from "@/lib/i18n";

beforeEach(() => {
  window.localStorage.clear();
});

function renderNavbar() {
  return render(
    <LocaleProvider>
      <CartProvider>
        <Navbar />
      </CartProvider>
    </LocaleProvider>
  );
}

describe("Navbar", () => {
  test("renders Turkish nav labels by default", async () => {
    renderNavbar();
    await waitFor(() => expect(screen.getByText("Mağaza")).toBeInTheDocument());
    expect(screen.getByText("Aksesuarlar")).toBeInTheDocument();
    const toggle = screen.getByRole("button", { name: "Switch to English" });
    expect(toggle).toHaveTextContent("EN");
  });

  test("clicking the language toggle switches all nav labels to English", async () => {
    renderNavbar();
    await waitFor(() => expect(screen.getByText("Mağaza")).toBeInTheDocument());

    fireEvent.click(screen.getByRole("button", { name: "Switch to English" }));

    await waitFor(() => expect(screen.getByText("Store")).toBeInTheDocument());
    expect(screen.getByText("Accessories")).toBeInTheDocument();
    const toggle = screen.getByRole("button", { name: "Türkçeye geç" });
    expect(toggle).toHaveTextContent("TR");
    expect(screen.queryByText("Mağaza")).not.toBeInTheDocument();
  });
});
