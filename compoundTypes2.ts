// Sum types (TS: Unions)
class Point {
  readonly kind: string = "Point"; // Tagged unions (Variants): every basic type has a (readonly) tag field
  x: number = 0;
  y: number = 0;
}

class Circle {
  readonly kind: string = "Circle";
  x: number = 0;
  y: number = 0;
  radius: number = 0;
}

class Rectangle {
  readonly kind: string = "Rectangle";
  x: number = 0;
  y: number = 0;
  width: number = 0;
  height: number = 0;
}

type Shape = Point | Circle | Rectangle;
let shapes: Shape[] = [new Point(), new Rectangle()];

shapes[1].x = 500; // Compiler will catch errors in this line - play with it ;)

function logger(shapes: Shape[]): string[] {
  let result: string[] = [];

  for (let shape of shapes) {
    switch (shape.kind) {
      case "Point":
        let point: Point = <Point>shape;
        result.push(`Point ${JSON.stringify(point)}`);
        break;
      case "Circle":
        let circle: Circle = <Circle>shape;
        result.push(`Circle ${JSON.stringify(circle)}`);
        break;
      case "Rectangle":
        let rectangle: Rectangle = <Rectangle>shape;
        result.push(`Rectangle ${JSON.stringify(rectangle)}`);
        break;
      default:
        throw new Error();
    }
  }
  return result;
}

console.log(logger(shapes));
