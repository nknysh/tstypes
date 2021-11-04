// type ParentType = number | string;

// let parentVar: ParentType = "omg what a string!";

// let childVarNumber: number = 42;

// let childVarString: string = "another string goes here ;)";

// function echo(value: ParentType): void {
//   console.log(value);
// }

// echo(parentVar);
// echo(childVarNumber);
// echo(childVarString);

class Person {
  name: string;
  age: number;
}

class Customer {
  name: string;
  age: number;
  membership: string;
}

class Pilot extends Person {
  license: "PPL";
}

function showName(human: Person): void {
  console.log(human.name);
}

const person: Person = { name: "Alice", age: 22 };
const customer: Customer = { name: "Michael", age: 25, membership: "Gold" };

showName(person);
showName(customer);

// Customer is a child type of Person ;)
// (Can be assigned wherever person in expected)
// But not vice-versa :P
