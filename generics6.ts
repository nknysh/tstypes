// Implement a function that iterates over an array backward (from back to front).

function* arrayBackwardIterator<T>(arr: T[]): IterableIterator<T> {
  for (let i = arr.length - 1; i >= 0; i--) {
    yield arr[i];
  }
}

const myArr = [1, "two", 3, 4, 5];
const iterator = arrayBackwardIterator(myArr);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
