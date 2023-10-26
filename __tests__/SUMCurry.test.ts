import { curry2, curry3, curry4, curry5 } from "../src/SUMCurry";

describe("curry functions", () => {
  test("curry2 works", () => {
    const sum = (a: number, b: number) => a + b;
    const curriedSum = curry2(sum);

    expect(curriedSum(1)(2)).toBe(3);
    expect(curriedSum(1, 2)).toBe(3);
  });

  test("curry3 works", () => {
    const sum = (a: number, b: number, c: number) => a + b + c;
    const curriedSum = curry3(sum);

    expect(curriedSum(1)(2)(3)).toBe(6);
    expect(curriedSum(1, 2)(3)).toBe(6);
    expect(curriedSum(1, 2, 3)).toBe(6);
  });

  test("curry4 works", () => {
    const sum = (a: number, b: number, c: number, d: number) => a + b + c + d;
    const curriedSum = curry4(sum);

    expect(curriedSum(1)(2)(3)(4)).toBe(10);
    expect(curriedSum(1, 2)(3)(4)).toBe(10);
    expect(curriedSum(1, 2, 3)(4)).toBe(10);
    expect(curriedSum(1, 2, 3, 4)).toBe(10);
  });

  test("curry5 works", () => {
    const sum = (a: number, b: number, c: number, d: number, e: number) =>
      a + b + c + d + e;
    const curriedSum = curry5(sum);

    expect(curriedSum(1)(2)(3)(4)(5)).toBe(15);
    expect(curriedSum(1, 2)(3)(4)(5)).toBe(15);
    expect(curriedSum(1, 2, 3)(4)(5)).toBe(15);
    expect(curriedSum(1, 2, 3, 4)(5)).toBe(15);
    expect(curriedSum(1, 2, 3, 4, 5)).toBe(15);
  });
});

describe("curry functions - edge cases", () => {
  test("curry2 returns undefined for incorrect number of arguments", () => {
    const sum = (a: number, b: number) => a + b;
    const curriedSum = curry2(sum);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum()).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, 2, 3)).toBeUndefined();
  });

  test("curry3 returns undefined for incorrect number of arguments", () => {
    const sum = (a: number, b: number, c: number) => a + b + c;
    const curriedSum = curry3(sum);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum()).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, 2, 3, 4)).toBeUndefined();
  });

  test("curry4 returns undefined for incorrect number of arguments", () => {
    const sum = (a: number, b: number, c: number, d: number) => a + b + c + d;
    const curriedSum = curry4(sum);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum()).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, 2, 3, 4, 5)).toBeUndefined();
  });

  test("curry5 returns undefined for incorrect number of arguments", () => {
    const sum = (a: number, b: number, c: number, d: number, e: number) =>
      a + b + c + d + e;
    const curriedSum = curry5(sum);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum()).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, 2, 3, 4, 5, 6)).toBeUndefined();
  });
});

describe("curry functions - edge cases with undefined arguments", () => {
  test("curry2 returns undefined when second argument is missing", () => {
    const sum = (a: number, b: number) => a + b;
    const curriedSum = curry2(sum);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, undefined)).toBeUndefined();
  });

  test("curry3 returns undefined when any argument is missing", () => {
    const sum = (a: number, b: number, c: number) => a + b + c;
    const curriedSum = curry3(sum);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, 2, undefined)).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, undefined, 3)).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, undefined)).toBeUndefined();
  });

  test("curry4 returns undefined when any argument is missing", () => {
    const sum = (a: number, b: number, c: number, d: number) => a + b + c + d;
    const curriedSum = curry4(sum);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, 2, 3, undefined)).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, undefined, 3, 4)).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, 2, undefined, 4)).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, 2, undefined)).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, undefined, 3)).toBeUndefined();
  });

  test("curry5 returns undefined when any argument is missing", () => {
    const sum = (a: number, b: number, c: number, d: number, e: number) =>
      a + b + c + d + e;
    const curriedSum = curry5(sum);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, 2, 3, 4, undefined)).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, undefined, 3, 4, 5)).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, 2, undefined, 4, 5)).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, 2, 3, undefined, 5)).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(typeof curriedSum(1, 2, 3, 4)).toBe("function");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, 2, undefined, 4)).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    expect(curriedSum(1, undefined, 3, 4)).toBeUndefined();
  });
});
