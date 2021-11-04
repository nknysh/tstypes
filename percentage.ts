/*
Restricting allowed values
*/

declare const percent: unique symbol;

declare type SuperPercentage = Percentage | undefined;

class Percentage {
  readonly value: number;
  [percent]: void;

  private constructor(value: number) {
    this.value = value;
  }

  static makePercentage(value: number): SuperPercentage {
    if (value < -50) value = -50;
    if (value === 0) return undefined;
    if (value > 100) throw new Error();
    return new Percentage(value);
  }
}

const myValue1: SuperPercentage = Percentage.makePercentage(-500);
console.log(myValue1);

const myValue2: SuperPercentage = Percentage.makePercentage(0);
console.log(myValue2);

const myValue3: SuperPercentage = Percentage.makePercentage(88);
console.log(myValue3);

const myValue4: SuperPercentage = Percentage.makePercentage(101);
console.log(myValue4);
