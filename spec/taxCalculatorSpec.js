const { calculateTax } = require("../src/taxCalculator");

describe("Tax Calculator", () => {

    it("returns zero tax for zero income", () => {
        const result = calculateTax(0);

        expect(result.tax).toBe(0);
        expect(result.netIncome).toBe(0);
        expect(result.effectiveRate).toBe(0);
    });

    it("does not tax the first 10000", () => {
        const result = calculateTax(10000);

        expect(result.tax).toBe(0);
        expect(result.netIncome).toBe(10000);
        expect(result.effectiveRate).toBe(0);
    });

    it("calculates tax progressively for 30000 income", () => {
        const result = calculateTax(30000);

        expect(result.tax).toBe(2000);
        expect(result.netIncome).toBe(28000);
    });

    it("calculates tax progressively for 60000 income", () => {
        const result = calculateTax(60000);

        expect(result.tax).toBe(8000);
        expect(result.netIncome).toBe(52000);
    });

    it("calculates tax for income above the final bracket", () => {
        const result = calculateTax(120000);

        expect(result.tax).toBe(27000);
        expect(result.netIncome).toBe(93000);
    });

    it("rejects negative income", () => {
        expect(() => calculateTax(-1)).toThrowError(
            "Income must be a non-negative number."
        );
    });

    it("rejects non-numeric income", () => {
        expect(() => calculateTax("abc")).toThrowError(
            "Income must be a non-negative number."
        );
    });

});