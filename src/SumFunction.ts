export type SumFunction = (...args: number[]) => any;

export const sum: SumFunction = function sumFunction(...args: number[]) {
  const f: SumFunction = function innerFunction(...innerArgs: number[]) {
    return sumFunction(...args, ...innerArgs);
  };

  f.valueOf = function valueOfFunction() {
    return args.reduce((acc, curr) => acc + curr, 0);
  };

  f.toString = function toStringFunction() {
    return f.valueOf().toString();
  };

  return f;
};

globalThis.alert = (message: any) => {
  console.log(message.toString());
};

alert(sum());
const s = sum();
alert(s(1));
alert(s(1)(2));
alert(s(3)(4)(5));
const s3 = sum(3);
alert(s3(5));
alert(s3(6));

// console.log(sum().toString()); // 0
// const s = sum();
// console.log(s(1).toString()); // 1
// console.log(s(1)(2).toString()); // 3
// console.log(s(3)(4)(5).toString()); // 12
// const s3 = sum(3);
// console.log(s3(5).toString()); // 8
// console.log(s3(6).toString()); // 9
