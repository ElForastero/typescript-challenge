type HelloWorld = string // expected to be a string

/* _____________ Test Cases _____________ */
import { Equal, Expect, NotAny } from "@type-challenges/utils";

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>
]
