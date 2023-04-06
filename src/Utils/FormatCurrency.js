const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "NRA",
  style: "currency",
});

export const formatCurrency = (number) => {
  return CURRENCY_FORMATTER.format(number);
};
