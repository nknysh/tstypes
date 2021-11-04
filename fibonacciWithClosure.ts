/*
Implement a function that returns the next number in the Fibonacci sequence
whenever it is called by using a closure.
*/

type FibRow = () => number;

function makeFibRow(): FibRow {
  let a: number = 0;
  let b: number = 1;

  return () => {
    let next: number = a;
    a = b;
    b = b + next;
    return next;
  };
}

let fibRow: FibRow = makeFibRow();

console.log(fibRow());
console.log(fibRow());
console.log(fibRow());
console.log(fibRow());
console.log(fibRow());
console.log(fibRow());
console.log(fibRow());
console.log(fibRow());
console.log(fibRow());
