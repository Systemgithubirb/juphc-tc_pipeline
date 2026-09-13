/**
 * Progressive tax calculator.
 *
 * These sample brackets are intentionally simple for the course project.
 * Replace the values with the tax rules required by your course version
 * if your instructor supplied a different bracket table.
 */
const TAX_BRACKETS = [
  { upTo: 10000, rate: 0.00 },
  { upTo: 30000, rate: 0.10 },
  { upTo: 60000, rate: 0.20 },
  { upTo: 100000, rate: 0.30 },
  { upTo: Infinity, rate: 0.35 }
];

function calculateTax(income) {
  if (!Number.isFinite(income) || income < 0) {
    throw new Error("Income must be a non-negative number.");
  }

  let remaining = income;
  let previousLimit = 0;
  let tax = 0;
  const breakdown = [];

  for (const bracket of TAX_BRACKETS) {
    const taxableInBracket = Math.max(
      0,
      Math.min(income, bracket.upTo) - previousLimit
    );

    const bracketTax = taxableInBracket * bracket.rate;
    tax += bracketTax;

    if (taxableInBracket > 0) {
      breakdown.push({
        from: previousLimit,
        to: bracket.upTo === Infinity ? null : bracket.upTo,
        rate: bracket.rate,
        taxable: Number(taxableInBracket.toFixed(2)),
        tax: Number(bracketTax.toFixed(2))
      });
    }

    if (income <= bracket.upTo) break;
    previousLimit = bracket.upTo;
    remaining -= taxableInBracket;
  }

  const netIncome = income - tax;
  const effectiveRate = income === 0 ? 0 : (tax / income) * 100;

  return {
    income: Number(income.toFixed(2)),
    tax: Number(tax.toFixed(2)),
    netIncome: Number(netIncome.toFixed(2)),
    effectiveRate: Number(effectiveRate.toFixed(2)),
    breakdown
  };
}

module.exports = { calculateTax, TAX_BRACKETS };