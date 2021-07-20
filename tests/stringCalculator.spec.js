const { expect } = require("chai");
const stringCalculator = require('../src/stringCalculator');

describe("string calculator", () => {
    it("should be return 1", () => {
        expect(stringCalculator.getNumbers(1)).to.equal(1);
    });
})