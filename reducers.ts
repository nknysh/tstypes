/*
Implement a first() function that takes an array of Ts and a function pred
(for predicate) that takes a T as an argument and returns a boolean. first()
will return the first element of the array for which pred() returns true or
undefined if pred() returns false for all elements.
*/

const arr = [1, 2, 3, 3, 5];

function first<T>(items: T[], pred: (x: T) => boolean): T | undefined {
  for (const item of items) {
    if (pred(item)) {
      return item;
    }
  }

  return undefined;
}

const result = first(arr, (item) => item == 5);

// console.log(result);

/*
Implement an all() function that takes an array of Ts and a function pred
(for predicate) that takes a T as an argument and returns a boolean. all()
will return true if pred() is true for all the elements of the array; otherwise, it
will return false.
*/

const arr2 = [7, 2, 3, 4, 5];

function all<T>(items: T[], pred: (x: T) => boolean): boolean {
  for (const item of items) {
    if (!pred(item)) {
      return false;
    }
  }
  return true;
}

const result2 = all(arr2, (item) => item > 0);

// console.log(result2);

// Samples of reducers and calling them
let numbers: number[] = [1, 2, 3, 4, 5];
let product: number = numbers.reduce((x, y) => x * y, 1);
let strings: string[] = ["apple", "orange", "peach"];
let longString: string = strings.reduce((x, y) => x + y, "");

console.log(product);
console.log(longString);
