/**
 * Notes:
 * @see https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
 */

/*
  11 - Tuple to Object
  -------
  by sinoon (@sinoon) #easy

  ### Question

  Given an array, transform to a object type and the key/value must in the given array.

  For example

  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  const result: TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```

  > View on GitHub: https://tsch.js.org/11
*/


/* _____________ Your Code Here _____________ */

type TupleToObject<T extends readonly any[]> = { [P in T[number]]: P }

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]
