const {convertToReadableString, addCommas, getStartIndex, getEndIndex} = require("./addCommas");

const listOfInputs = [500, 1234, 1000000, 9876543210, 6, -10, -5678, 12345.678, -3141592.65];
const listOfExpectedOutputs = ["500", "1,234", "1,000,000", "9,876,543,210", "6", "-10", "-5,678", "12,345.678", "-3,141,592.65"];

describe("Testing convertToReadableString and addCommas functions", () => {
  test("convertToReadableString and addCommas are both functions", () => {
    expect(typeof convertToReadableString).toBe("function");
    expect(typeof addCommas).toBe("function");
  });
  test("invalid input types are rejected by convertToReadableString", () => {
    expect(convertToReadableString("abcd")).toBe("Invalid input type, must be a valid integer or floating point number");
  });
  test("convertToReadableString and addCommas functions work as intended for valid inputs", () => {
    for (const [index, input] of listOfInputs.entries()) {
      expect(convertToReadableString(input)).toBe(listOfExpectedOutputs[index]);
      expect(addCommas(input.toString())).toBe(listOfExpectedOutputs[index]);
    }
  });
});

const listOfExpectedStartIndices = [0,0,0,0,0,1,1,0,1];

describe("Testing getStartIndex function", () => {
  test("getStartIndex is a function", () => {
    expect(typeof getStartIndex).toBe("function");
  });
  test("getStartIndex works as intended", () => {
    for (const [index, input] of listOfInputs.entries()) {
      expect(getStartIndex(input.toString())).toBe(listOfExpectedStartIndices[index]);
    }
  });
});

const listOfExpectedEndIndices = [3, 4, 7, 10, 1, 3, 5, 5, 8];

describe("Testing getEndIndex function", () => {
  test("getEndIndex is a function", () => {
    expect(typeof getEndIndex).toBe("function");
  });
  test("getEndIndex works as intended", () => {
    for (const [index, input] of listOfInputs.entries()) {
      expect(getEndIndex(input.toString())).toBe(listOfExpectedEndIndices[index]);
    }
  });
});