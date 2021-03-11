/*
  20 - Promise.all
  -------
  by Anthony Fu (@antfu) #medium #array #built-in

  ### Question

  Type the function `PromiseAll` that accepts an array of PromiseLike objects, the returning value should be `Promise<T>` where `T` is the resolved result array.

  ```ts
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });

  // expected to be `Promise<[number, number, string]>`
  const p = Promise.all([promise1, promise2, promise3] as const)
  ```

  > View on GitHub: https://tsch.js.org/20
*/

/* _____________ Your Code Here _____________ */

// declare function PromiseAll<T extends readonly any[]>(
//   values: T
// ): Promise<T extends PromiseLike<infer U> ? U : T>;

// From docs of TS 4.0:
// For example, that means we can type function like tail, without our “death by a thousand overloads” issue.
// function tail<T extends any[]>(arr: readonly [any, ...T]) {
//   const [_ignored, ...rest] = arr;
//   return rest;
// }

declare function PromiseAll<T extends any[]>(
  /**
   * 👀 Magic
   * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types
   */
  values: readonly [...T]
): Promise<{ [K in keyof T]: T[K] extends Promise<infer U> ? U : T[K] }>;

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const);
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)]);

type cases = [
  Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
  Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
  Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>
];
