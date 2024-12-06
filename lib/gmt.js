const offset = new Date().getTimezoneOffset() / -60;

export const gmt = new Intl.NumberFormat("en-US", {
  signDisplay: "exceptZero",
}).format(offset);
