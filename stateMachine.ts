/*
Please implement using OOP / TypeScript:
State machine 'Connection' with two states: Open and Closed.

Process connection:
* If connection is Closed, open connection.
* If connection is Open, read data. If data is empty, close connection.

Please output state change and actions to console.
*/

enum State {
  Open,
  Closed,
}

class Connection {
  private state: State = State.Open;
  private makeAction: () => void = this.connect;
  read = (): string => {
    // return "Oh my godness what a string!";
    return "";
  };

  private connect(): void {
    console.log("Opening connection...");
    this.state = State.Open;
  }

  private disconnect(): void {
    console.log("Closing connection...");
    this.state = State.Closed;
  }

  changeState(desiredState: State): void {
    if (desiredState === State.Open) this.makeAction = this.connect;
    this.makeAction();
  }

  process(): void {
    if (this.state === State.Closed) {
      this.makeAction = this.connect;
    }
    if (this.state === State.Open) {
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

  getState(): State {
    return this.state;
  }
}

let connection = new Connection();

// connection.changeState("closed");
// console.log(connection.getState());

connection.process();
