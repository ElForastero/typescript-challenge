/*
  9 - Deep Readonly
  -------
  by Anthony Fu (@antfu) #medium #readonly #object-keys #deep

  ### Question

  Implement a generic `DeepReadonly<T>` which make every parameter of an object - and its sub-objects recursively - readonly.

  You can assume that we are only dealing with Objects in this challenge. Arrays, Functions, Classes and so on are no need to take into consideration. However, you can still challenge your self by covering different cases as many as possbile.

  For example

  ```ts
  type X = {
    x: {
      a: 1
      b: 'hi'
    }
    y: 'hey'
  }

  type Expected = {
    readonly x: {
      readonly a: 1
      readonly b: 'hi'
    }
    readonly y: 'hey'
  }

  const todo: DeepReadonly<X> // should be same as `Expected`
  ```

  > View on GitHub: https://tsch.js.org/9
*/

/* _____________ Your Code Here _____________ */

// type NonObject = string | number | boolean | null | undefined | Array<any> | Function;
type IsObject<T> = T extends object
  ? T extends Function
    ? false
    : T extends Array<any>
    ? false
    : true
  : false;

type DeepReadonly<T> = {
  readonly [K in keyof T]: IsObject<T[K]> extends true
    ? DeepReadonly<T[K]>
    : T[K];
};

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>];

type X = {
  arr: [1, 2];
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: 'string';
        };
        k: 'hello';
      };
    };
  };
};

type Expected = {
  readonly arr: [1, 2];
  readonly a: () => 22;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: 'string';
        };
        readonly k: 'hello';
      };
    };
  };
};
