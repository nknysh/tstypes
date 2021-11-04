// OOP Inheritance

// Making this an interface, as it does not have state
// Interface is a contract: objects should have method eval()
interface IExpression {
  eval(): number;
}

// 'Is-a' relationship: binary expression is an expression
abstract class BinaryExpression implements IExpression {
  readonly a: number;
  readonly b: number;

  constructor(a: number, b: number) {
    this.a = a;
    this.b = b;
  }

  abstract eval(): number; // Making this abstract, as implementation will go level down
}

// 'Is-a' relationship: unary expression is an expression
abstract class UnaryExpression implements IExpression {
  readonly a: number;

  constructor(a: number) {
    this.a = a;
  }

  abstract eval(): number;
}

// 'Is-a' relationship: sum expression is a binary expression
class SumExpression extends BinaryExpression {
  eval(): number {
    return this.a + this.b;
  }
}

// 'Is-a' relationship: multiply expression is a binary expression
class MulExpression extends BinaryExpression {
  eval(): number {
    return this.a * this.b;
  }
}

// 'Is-a' relationship: minus expression is an unary expression
class UnaryMinusExpression extends UnaryExpression {
  eval(): number {
    return -this.a;
  }
}

console.log(new SumExpression(2, 3).eval());
console.log(new MulExpression(2, 3).eval());
console.log(new UnaryMinusExpression(-8).eval());
