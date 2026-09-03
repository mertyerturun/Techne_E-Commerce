export type Locale = "tr" | "en";

export type Localized<T = string> = Record<Locale, T>;
