enum TurnDirection {
  Left,
  Right,
}

function turnAngle(turn: TurnDirection): number {
  switch (turn) {
    case TurnDirection.Left:
      return -90;
    case TurnDirection.Right:
      return 90;
    default:
      // throw new Error("Unknown TurnDirection");
      return fail("Unknown TurnDirection");
    // return -1;
  }
}

// Return type Never to make this function returnable ;)
// Never is the bottom type of subtyping hierarchy. We can't create an actual value for it.
function fail(message: string): never {
  console.error(message);
  throw new Error(message);
}

let direction: TurnDirection = 45;

console.log(turnAngle(direction));
