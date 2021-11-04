/*
OOP is a programming paradigm based on
the concept of objects, which contain both data and code. The data is the
state of the object. The code is one or more methods, also known as messages.
In an object-oriented system, objects can “talk” to or message one another by
invoking each other’s methods.

Two key features of OOP are encapsulation, which allows us to hide data and methods,
and inheritance, which extends a type with additional data and/or code.
*/

// OOP Composition

class Engine {
  model: string;
}
class Wing {
  // 'Has-a' rule: Wing has an Engine
  length: number;
  engine: Engine = new Engine(); // Composition takes place here ;)
}

class Airplane {
  // 'Has-a' rule: Airplane has a wing
  leftWing: Wing = new Wing(); // Composition takes place here ;)
  rightWing: Wing = new Wing(); // Composition takes place here ;)

  logInfo() {
    console.log(this);
  }
}

const motorSichEngine: Engine = new Engine();
motorSichEngine.model = "MSCH-188";

const myPlane = new Airplane();
myPlane.leftWing.length = 30;
myPlane.leftWing.engine = motorSichEngine;
myPlane.rightWing.length = 30;
myPlane.rightWing.engine = new Engine();
myPlane.rightWing.engine.model = "Improved MSCH-188i";

myPlane.logInfo();
