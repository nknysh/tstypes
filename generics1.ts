function identity<T>(value: T): T {
  return value;
}

function type<T>(value: T): string {
  return typeof value;
}

let myValue;

myValue = "Hello World";
myValue = 123;
myValue = true;
myValue = [1, 2, 3];
myValue = { x: 1, y: 2 };
myValue = null;
myValue = undefined;
myValue = (x: number) => x * x;

console.log(`The type of ${identity(myValue)} is ${type(myValue)}`);
