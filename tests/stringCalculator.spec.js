const { expect } = require("chai");
const stringCalculator = require("../src/stringCalculator");

describe("string calculator", () => {
  it("should be return 1", () => {
    expect(stringCalculator.getNumbers(1)).to.equal(1);
  });

  it("should be return 0 to empty string", () => {
    expect(stringCalculator.getNumbers("")).to.equal(0);
  });

  it("should be return string as array", () => {
    expect(stringCalculator.getArrayWithNumbers("1")).to.eql([1]);
  });

  it("should be return string as array with more numbers", () => {
    expect(stringCalculator.getArrayWithNumbers("1,2,3")).to.eql([1, 2, 3]);
  });

  it("should be return string as array of numbers separated by line breaker", () => {
    expect(stringCalculator.getArrayWithNumbers("1\n2\n3")).to.eql([1, 2, 3]);
  });

  it("should be return string as array of numbers separated by line breaker and comma", () => {
    expect(stringCalculator.getArrayWithNumbers("1,2\n3")).to.eql([1, 2, 3]);
  });

  it("should be return sum by array elements", () => {
    expect(stringCalculator.getSumByArray([1, 2, 3])).to.eql(6);
  });

  it("should be return sum by string", () => {
    expect(stringCalculator.getSumByStrings("1,2\n3")).to.equal(6);
  });

  it("should be return sum by string", () => {
    expect(stringCalculator.getSumByStrings("1,2\n3*4:5")).to.equal(15);
  });
});
