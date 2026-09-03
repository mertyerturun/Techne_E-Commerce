import { act, renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { LocaleProvider, useLocale } from "./i18n";

beforeEach(() => {
  window.localStorage.clear();
});

function renderLocale() {
  return renderHook(() => useLocale(), { wrapper: LocaleProvider });
}

describe("LocaleProvider", () => {
  test("defaults to Turkish and exposes the Turkish dictionary", async () => {
    const { result } = renderLocale();
    await waitFor(() => expect(document.documentElement.lang).toBe("tr"));
    expect(result.current.locale).toBe("tr");
    expect(result.current.t.nav.store).toBe("Mağaza");
  });

  test("toggleLocale switches locale and dictionary, and persists the choice", async () => {
    const { result } = renderLocale();
    await waitFor(() => expect(document.documentElement.lang).toBe("tr"));

    act(() => result.current.toggleLocale());

    await waitFor(() => expect(result.current.locale).toBe("en"));
    expect(result.current.t.nav.store).toBe("Store");
    expect(document.documentElement.lang).toBe("en");
    expect(window.localStorage.getItem("techne-locale")).toBe("en");
  });

  // Regression test: a mount-time write effect used to run with the stale
  // default locale before the localStorage-read effect's state update had
  // committed, stomping a previously saved "en" choice back to "tr" on every
  // fresh page load. See git history for the fix (hydrated-gated write).
  test("picks up a locale already saved in localStorage on mount, without it being reset back to the default", async () => {
    window.localStorage.setItem("techne-locale", "en");

    const { result } = renderLocale();

    await waitFor(() => expect(result.current.locale).toBe("en"));
    expect(document.documentElement.lang).toBe("en");
    expect(window.localStorage.getItem("techne-locale")).toBe("en");
  });

  test("ignores an invalid stored value and falls back to Turkish", async () => {
    window.localStorage.setItem("techne-locale", "fr");

    const { result } = renderLocale();

    await waitFor(() => expect(document.documentElement.lang).toBe("tr"));
    expect(result.current.locale).toBe("tr");
  });
});
