import { sum } from "../src/SumFunction";

describe("sum function", () => {
  it("should return 0 when called without arguments", () => {
    expect(sum().toString()).toBe("0");
  });

  it("should return correct sum when called with multiple chained calls", () => {
    expect(sum(1)(2).toString()).toBe("3");
    expect(sum(3)(4)(5).toString()).toBe("12");
  });

  it("should work with stored references", () => {
    const s = sum();
    expect(s(1).toString()).toBe("1");
    const s3 = sum(3);
    expect(s3(5).toString()).toBe("8");
    expect(s3(6).toString()).toBe("9");
  });
});
