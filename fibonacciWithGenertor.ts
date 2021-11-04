/*
Implement a function that returns the next number in the Fibonacci sequence
whenever it is called by using a generator.
*/

function* makeFibRowGen(): IterableIterator<number> {
  let a: number = 0;
  let b: number = 1;
  let i: number = 1;
  let max = 20;

  while (true) {
    let next: number = a;
    a = b;
    b = a + next;
    yield next;
    if (i++ >= max) break;
  }
}

let fibRowGen: IterableIterator<number> = makeFibRowGen();

for (let i = 0; i < 30; i++) {
  console.log(fibRowGen.next());
}
