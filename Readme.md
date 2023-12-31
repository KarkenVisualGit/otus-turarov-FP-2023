[![codecov](https://codecov.io/gh/KarkenVisualGit/otus-turarov-FP-2023/graph/badge.svg?token=cHY4jUyQRW)](https://app.codecov.io/gh/KarkenVisualGit/otus-turarov-FP-2023/tree/otus-FP-2023/src)

## Additional details and impacted files

```diff
@@           Coverage Diff           @@
##             main       #1   +/-   ##
=======================================
  Coverage        ?   99.17%
=======================================
  Files           ?        5
  Lines           ?      363
  Branches        ?      103
=======================================
  Hits            ?      360
  Misses          ?        3
  Partials        ?        0
```

## Задание

Реализация типовых задач с использованием OOП / ФП с покрытием кода тестами

### Цель

В этом задании мы попрактикуемся в работе с typescript и jest.

В ходе работы тренируются:

- работа с типами
- решение типовых задач разработки
- написание тестов

### Необходимо

- создать новый репозиторий
- настроить в нем проект (typescript, jest, линтеры, github actions)
- в новой ветке решить предложенные задачи
- сделать пуллреквест
- сбросить пуллреквест в чат с ментором

### Задачи

1. Написать функцию для [каррирования](https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5).

Пример использования функции:

    const func = (a, b, c, d, e) => a + b + c + d + e;

    const hof = yourFunction(func);

    console.log(hof(1, 2, 3, 4, 5)); // 15
    console.log(hof(2, 3, 4)(5, 6)); // 20
    console.log(hof(3, 4)(5, 6)(7)); // 25
    console.log(hof(4, 5)(6)(7, 8)); // 30
    console.log(hof(5)(6)(7)(8)(9)); // 35

2. Написать функцию сумматор.

При вызове функции с аргументами она суммирует переданные значения (полезно прочитать про методы .valueOf и .toString):

    const sum = function() { /* put your code here */};

    alert(sum()); // 0;

    const s = sum();
    alert(s(1)); // 1
    alert(s(1)(2)); //3
    alert(s(3)(4)(5)); // 12

    const s3 = sum(3);

    alert(s3(5)); // 8
    alert(s3(6)); // 9

3. Реализовать функцию параллельной потоковой обработки данных.

В конструктор передается число парралельных "потоков", которое указывает сколько данных обрабатывается в конкретный момент времени:

    const runner = new Parallel(2);

    console.log(await runner
    .jobs(
    () => new Promise((resolve) => setTimeout(resolve, 10, 1)),
    () => new Promise((resolve) => setTimeout(resolve, 50, 2)),
    () => new Promise((resolve) => setTimeout(resolve, 20, 3)),
    () => new Promise((resolve) => setTimeout(resolve, 90, 4)),
    () => new Promise((resolve) => setTimeout(resolve, 30, 5)),
    )) // [1, 3, 2, 4, 5];

4. Реализовать функцию, возвращающую развернутую по спирали матрицу (любой размерности).

   spiral([ [0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19] ]); // [0, 1, 2, 3, 4, 9, 14, 19, 18, 17, 16, 15, 10, 5, 6, 7, 8, 13, 12, 11]

5. Реализовать функцию, реализующую сортировку с учетом правил semver.

   semverSort([ "1.0.5", "2.5.0", "0.12.0", "1", "1.23.45", "1.4.50", "1.2.3.4.5.6.7"]); // [ "0.12.0", "1", "1.0.5", "1.2.3.4.5.6.7", "1.4.50", "1.23.45", "2.5.0" ]
