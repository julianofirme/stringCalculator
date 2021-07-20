const { expect } = require("chai");
const stringCalculator = require('../src/stringCalculator');

describe("string calculator", () => {
    it("should be return 1", () => {
        expect(stringCalculator.getNumbers(1)).to.equal(1);
    });

    it("should be return 0 to empty string", () => {
        expect(stringCalculator.getNumbers('')).to.equal(0);
    });

    it("should be return string as number", () => {
        expect(stringCalculator.getNumbers('1')).to.equal(1);
    });
})