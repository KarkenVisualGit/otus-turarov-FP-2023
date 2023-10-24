interface CurriedFunction2<T1, T2, R> {
  (t1: T1): (t2: T2) => R;
  (t1: T1, t2: T2): R;
}

interface CurriedFunction3<T1, T2, T3, R> {
  (t1: T1): CurriedFunction2<T2, T3, R>;
  (t1: T1, t2: T2): (t3: T3) => R;
  (t1: T1, t2: T2, t3: T3): R;
}

interface CurriedFunction4<T1, T2, T3, T4, R> {
  (t1: T1): CurriedFunction3<T2, T3, T4, R>;
  (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
  (t1: T1, t2: T2, t3: T3): (t4: T4) => R;
  (t1: T1, t2: T2, t3: T3, t4: T4): R;
}

interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
  (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
  (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
  (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
  (t1: T1, t2: T2, t3: T3, t4: T4): (t5: T5) => R;
  (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
}

function curry2<T1, T2, R>(
  f: (t1: T1, t2: T2) => R
): CurriedFunction2<T1, T2, R> {
  function curriedFunction(t1: T1): (innerT2: T2) => R;
  function curriedFunction(t1: T1, t2: T2): R;
  function curriedFunction(t1: T1, t2?: T2): any {
    switch (arguments.length) {
      case 1:
        return function innerFunction(innerT2: T2): R {
          return f(t1, innerT2);
        };
      case 2:
        if (typeof t2 !== "undefined") {
          return f(t1, t2);
        }
        break;
      default:
        return undefined;
    }
    return undefined;
  }
  return curriedFunction;
}

function curry3<T1, T2, T3, R>(
  f: (t1: T1, t2: T2, t3: T3) => R
): CurriedFunction3<T1, T2, T3, R> {
  function curriedFunction(t1: T1): CurriedFunction2<T2, T3, R>;
  function curriedFunction(t1: T1, t2: T2): (innerT3: T3) => R;
  function curriedFunction(t1: T1, t2: T2, t3: T3): R;
  function curriedFunction(t1: T1, t2?: T2, t3?: T3): any {
    switch (arguments.length) {
      case 1:
        return curry2((innerT2: T2, innerT3: T3): R => f(t1, innerT2, innerT3));
      case 2:
        if (typeof t2 !== "undefined") {
          return function innerFunction2(innerT3: T3): R {
            return f(t1, t2, innerT3);
          };
        }
        break;
      case 3:
        if (typeof t2 !== "undefined" && typeof t3 !== "undefined") {
          return f(t1, t2, t3);
        }
        break;
      default:
        return undefined;
    }
    return undefined;
  }
  return curriedFunction;
}

function curry4<T1, T2, T3, T4, R>(
  f: (t1: T1, t2: T2, t3: T3, t4: T4) => R
): CurriedFunction4<T1, T2, T3, T4, R> {
  function curriedFunction(t1: T1, t2?: T2, t3?: T3, t4?: T4): any {
    switch (arguments.length) {
      case 1:
        return curry3(
          (innerT2: T2, innerT3: T3, innerT4: T4): R =>
            f(t1, innerT2, innerT3, innerT4)
        );
      case 2:
        if (typeof t2 !== "undefined") {
          return curry2(
            (innerT3: T3, innerT4: T4): R => f(t1, t2, innerT3, innerT4)
          );
        }
        break;
      case 3:
        if (typeof t2 !== "undefined" && typeof t3 !== "undefined") {
          return function innerFunction3(innerT4: T4): R {
            return f(t1, t2, t3, innerT4);
          };
        }
        break;
      case 4:
        if (
          typeof t2 !== "undefined" &&
          typeof t3 !== "undefined" &&
          typeof t4 !== "undefined"
        ) {
          return f(t1, t2, t3, t4);
        }
        break;
      default:
        return undefined;
    }
    return undefined;
  }
  return curriedFunction;
}

function curry5<T1, T2, T3, T4, T5, R>(
  f: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R
): CurriedFunction5<T1, T2, T3, T4, T5, R> {
  function curriedFunction(t1: T1, t2?: T2, t3?: T3, t4?: T4, t5?: T5): any {
    switch (arguments.length) {
      case 1:
        return curry4(
          (innerT2: T2, innerT3: T3, innerT4: T4, innerT5: T5): R =>
            f(t1, innerT2, innerT3, innerT4, innerT5)
        );
      case 2:
        if (typeof t2 !== "undefined") {
          return curry3(
            (innerT3: T3, innerT4: T4, innerT5: T5): R =>
              f(t1, t2, innerT3, innerT4, innerT5)
          );
        }
        break;
      case 3:
        if (typeof t2 !== "undefined" && typeof t3 !== "undefined") {
          return curry2(
            (innerT4: T4, innerT5: T5): R => f(t1, t2, t3, innerT4, innerT5)
          );
        }
        break;
      case 4:
        if (
          typeof t2 !== "undefined" &&
          typeof t3 !== "undefined" &&
          typeof t4 !== "undefined"
        ) {
          return function innerFunction4(innerT5: T5): R {
            return f(t1, t2, t3, t4, innerT5);
          };
        }
        break;
      case 5:
        if (
          typeof t2 !== "undefined" &&
          typeof t3 !== "undefined" &&
          typeof t4 !== "undefined" &&
          typeof t5 !== "undefined"
        ) {
          return f(t1, t2, t3, t4, t5);
        }
        break;
      default:
        return undefined;
    }
    return undefined;
  }
  return curriedFunction;
}

const func = (a: number, b: number, c: number, d: number, e: number): number =>
  a + b + c + d + e;

const hof = curry5(func);

console.log(hof(1, 2, 3, 4, 5)); // 15
console.log(hof(2, 3, 4)(5, 6)); // 20
console.log(hof(3, 4)(5, 6)(7)); // 25
console.log(hof(4, 5)(6)(7, 8)); // 30
console.log(hof(5)(6)(7)(8)(9)); // 35
