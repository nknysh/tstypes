const userData = '{ "name": "Alicia", "age": "28" }';

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

function isUser(user: any): user is User {
  if (user === null || user === undefined) return false;
  return typeof user.name === "string";
}

// Incoming (User) data is of type Any
// Convert Any to Unknown
// Type Unknown is a top type in TS
// type unknown: (Object | null | undefined)
function deserialize(input: string): unknown {
  return JSON.parse(input); // returns type Any
}

function greet(user: User): void {
  console.log(`Hi ${user.name}!`);
}

function dontGreet(): void {
  console.log(`No one to greet :P`);
}

let user = deserialize(userData);

// Unknown can be used only after type check
if (isUser(user)) {
  greet(user);
} else dontGreet();

// greet(user);

// greet(deserialize('{ "name": "Brad", "age": "33" }'));

// Danger: Any value can be assigned to any other type, bypassing type checking.
// greet(deserialize('{ "nickname": "Hornet", "age": "39"}'));
// greet(deserialize("{}"));
