/*
Please implement using OOP / TypeScript:
State machine 'Connection' with two states: Open and Closed.

Process connection:
* If connection is Closed, open connection.
* If connection is Open, read data. If data is empty, close connection.

Please output state change and actions to console.
*/

class Connection {
  state = "Open";
  makeAction = this.connect;
  read = () => {
    return "Oh my godness what a string!";
    // return "";
  };

  connect() {
    console.log("Opening connection...");
    this.state = State.Open;
  }

  disconnect() {
    console.log("Closing connection...");
    this.state = "Closed";
  }

  changeState(desiredState) {
    if (desiredState === "Open") this.makeAction = this.connect;
    this.makeAction();
  }

  process() {
    if (this.state === "Closed") {
      this.makeAction = this.connect;
    }
    if (this.state === "Open") {
      let result = this.read();

      if (!result.length) {
        this.makeAction = this.disconnect;
      } else {
        console.log(`The result is ${result}`);
        return;
      }
    }
    this.makeAction();
  }

  getState() {
    return this.state;
  }
}

let connection = new Connection();

// connection.changeState("closed");
// console.log(connection.getState());

connection.process();
