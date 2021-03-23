/*
  108 - Trim
  -------
  by Anthony Fu (@antfu) #medium #template-literal
  
  ### Question
  
  Implement `Trim<T>` which takes an exact string type and returns a new string with the whitespace from both ends removed.
  
  For example
  
  ```ts
  type trimed = Trim<'  Hello World  '> // expected to be 'Hello World'
  ```
  
  > View on GitHub: https://tsch.js.org/108
*/

/* _____________ Your Code Here _____________ */

type Space = ' ' | '\t' | '\n';

// Naive solution
// type Trim<S extends string> = S extends `${Space}${infer R}`
//   ? Trim<R>
//   : S extends `${infer L}${Space}`
//   ? Trim<L>
//   : S;

type Trim<S extends string> = S extends
  | `${Space}${infer T}`
  | `${infer T}${Space}`
  ? Trim<T>
  : S;

/* _____________ Test Cases _____________ */
import { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>
];
