// Tuples
type Coords = [number, number];

function distanceTuples(point1: Coords, point2: Coords): number {
  return Math.sqrt((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2);
}

console.log(distanceTuples([2, 2], [3, 3]));

// Records
type CoordsRecord = { x: number; y: number };

function distanceRecords(point1: CoordsRecord, point2: CoordsRecord): number {
  return Math.sqrt((point1.x - point2.x) ** 2 + (point1.y - point2.y) ** 2);
}

console.log(distanceRecords({ x: 2, y: 2 }, { x: 32, y: 19 }));
