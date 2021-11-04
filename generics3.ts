/*
Implement a Stack<T> data structure representing a stack (last-in-first-out)
with the common push(), pop(), and peek() methods.
*/

class Stack<T> {
  private items: T[] = [];

  constructor() {
    this.items = [];
  }

  pop() {
    if (this.items.length === 0) throw new Error();
    this.items.pop();
  }

  push(value: T) {
    this.items.push(value);
  }

  peek() {
    if (this.items.length === 0) throw new Error();
    console.log("Peek: " + this.items[this.items.length - 1]);
  }

  log() {
    console.log("Log: " + this.items);
  }
}

const myStack = new Stack<string>();

myStack.push("Hey");
myStack.push("Hello");
myStack.push("Aloha mio amigo");
myStack.log();
myStack.pop();
myStack.peek();
myStack.pop();
myStack.peek();
myStack.pop();
myStack.peek();
