// type Box<T> = {
//   value: T;
// };

class Box<T> {
  readonly value: T;

  constructor(value: T) {
    this.value = value;
  }
}

function unbox<T>(boxed: Box<T>): T {
  return boxed.value;
}

// const valueOfMine: Box<number> = { value: 123 };
// const valueOfMine: Box<string> = { value: "123" };
// const valueOfMine: Box<boolean> = { value: true };

// const valueOfMine = new Box<number>(123);
// const valueOfMine = new Box<string>("hello dear");
const valueOfMine = new Box<boolean>(true);

console.log(unbox(valueOfMine));
