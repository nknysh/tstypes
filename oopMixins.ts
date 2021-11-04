// OOP Mix-ins (TS intersection types)
// Use to add behavior of one type to another type

function extend<First, Second>(first: First, second: Second): First & Second {
  const result: unknown = {};
  for (const prop in first) {
    if (first.hasOwnProperty(prop)) {
      (<First>result)[prop] = first[prop];
    }
  }
  for (const prop in second) {
    if (second.hasOwnProperty(prop)) {
      (<Second>result)[prop] = second[prop];
    }
  }
  return <First & Second>result;
}

class Letter {
  text: string = null;
}

class Cargo {
  weight: number = null;
}

class Tracking {
  status: string;

  constructor(s: string) {
    this.status = s;
  }

  updateStatus = (s: string) => {
    this.status = s;
  };
}

// Establish 'includes' relationship: Letter/Cargo has tracking
type shippingLetter = Letter & Tracking;
type shippingCargo = Cargo & Tracking;

const myShipping: shippingCargo = extend(new Cargo(), new Tracking("New"));

myShipping.weight = 50;
myShipping.status = "Delivered";
console.log(myShipping);
