export const Currency = {
  formatCurrency(
    amount: number,
    currency: CurrencyConfig = CurrencyConfigs.IDR,
    withSymbol: boolean = true,
    decimalPlaces?: number,
    compact: boolean = false,
  ): string {
    if (compact) {
      return formatCompact(amount, currency, withSymbol, () =>
        format(amount, currency, withSymbol, decimalPlaces),
      );
    }
    return format(amount, currency, withSymbol, decimalPlaces);
  },

  formatCurrencyByCode(
    amount: number,
    currencyCode: string = "IDR",
    withSymbol: boolean = true,
    decimalPlaces?: number,
    compact: boolean = false,
  ): string {
    const config = CurrencyConfigs[currencyCode] ?? CurrencyConfigs.IDR;
    if (compact) {
      return formatCompact(amount, config, withSymbol, () =>
        format(amount, config, withSymbol, decimalPlaces),
      );
    }
    return format(amount, config, withSymbol, decimalPlaces);
  },

  from(code: string): CurrencyConfig {
    return CurrencyConfigs[code] ?? CurrencyConfigs.IDR;
  },

  fromOrNull(code: string): CurrencyConfig | null {
    return CurrencyConfigs[code] ?? null;
  },

  fromOrDefault(code: string, defaultValue: CurrencyConfig): CurrencyConfig {
    return CurrencyConfigs[code] ?? defaultValue;
  },

  getAvailableCurrency(): CurrencyConfig[] {
    return Object.values(CurrencyConfigs);
  },
};

export type SymbolPosition = "PREFIX" | "SUFFIX";

export interface CurrencyConfig {
  symbol: string;
  code: string;
  name?: string;
  decimalSeparator: string;
  thousandSeparator: string;
  symbolPosition: SymbolPosition;
  spaceBetweenAmountAndSymbol: boolean;
  defaultDecimalPlaces: number;
}

export const CurrencyConfigs: Record<string, CurrencyConfig> = {
  IDR: {
    symbol: "Rp",
    code: "IDR",
    name: "Indonesia Rupiah",
    decimalSeparator: ",",
    thousandSeparator: ".",
    symbolPosition: "PREFIX",
    spaceBetweenAmountAndSymbol: true,
    defaultDecimalPlaces: 0,
  },
  USD: {
    symbol: "$",
    code: "USD",
    name: "United States Dollar",
    decimalSeparator: ".",
    thousandSeparator: ",",
    symbolPosition: "PREFIX",
    spaceBetweenAmountAndSymbol: false,
    defaultDecimalPlaces: 2,
  },
  EUR: {
    symbol: "€",
    code: "EUR",
    name: "Euro",
    decimalSeparator: ",",
    thousandSeparator: ".",
    symbolPosition: "SUFFIX",
    spaceBetweenAmountAndSymbol: true,
    defaultDecimalPlaces: 2,
  },
  GBP: {
    symbol: "£",
    code: "GBP",
    name: "British Pound Sterling",
    decimalSeparator: ".",
    thousandSeparator: ",",
    symbolPosition: "PREFIX",
    spaceBetweenAmountAndSymbol: false,
    defaultDecimalPlaces: 2,
  },
  JPY: {
    symbol: "¥",
    code: "JPY",
    name: "Japanese Yen",
    decimalSeparator: ".",
    thousandSeparator: ",",
    symbolPosition: "PREFIX",
    spaceBetweenAmountAndSymbol: false,
    defaultDecimalPlaces: 0,
  },
};
export function formatCompact(
  value: number,
  config: CurrencyConfig,
  withSymbol: boolean = true,
  cb: () => string = () => "",
): string {
  if (value >= 1_000_000_000)
    return (
      `${withSymbol ? config.symbol : ""}` +
      (value / 1_000_000_000).toFixed(1) +
      "B"
    );
  if (value >= 1_000_000)
    return (
      `${withSymbol ? config.symbol : ""}` +
      (value / 1_000_000).toFixed(1) +
      "M"
    );
  if (value >= 1_000)
    return (
      `${withSymbol ? config.symbol : ""}` + (value / 1_000).toFixed(1) + "K"
    );
  return cb();
}
function format(
  amount: number,
  config: CurrencyConfig,
  withSymbol: boolean = true,
  decimalPlaces?: number,
): string {
  const decimals = decimalPlaces ?? config.defaultDecimalPlaces;

  const value = Math.abs(amount);

  let formattedValue: string;

  if (decimals > 0) {
    const wholeNumber = Math.floor(value);
    const decimal = Math.floor((value - wholeNumber) * Math.pow(10, decimals));

    const wholeFormatted = wholeNumber
      .toString()
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g)!
      .join(config.thousandSeparator)
      .split("")
      .reverse()
      .join("");

    const decimalFormatted = decimal.toString().padStart(decimals, "0");

    formattedValue =
      wholeFormatted + config.decimalSeparator + decimalFormatted;
  } else {
    formattedValue = Math.floor(value)
      .toString()
      .split("")
      .reverse()
      .join("")
      .match(/.{1,3}/g)!
      .join(config.thousandSeparator)
      .split("")
      .reverse()
      .join("");
  }

  const signedValue = amount < 0 ? `-${formattedValue}` : formattedValue;

  if (!withSymbol) return signedValue;

  const space = config.spaceBetweenAmountAndSymbol ? " " : "";

  if (config.symbolPosition === "PREFIX") {
    return `${config.symbol}${space}${signedValue}`;
  } else {
    return `${signedValue}${space}${config.symbol}`;
  }
}
