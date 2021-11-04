/*
Implement a pre-order traversal for a generic binary tree. Pre-order traversal is
parent first, followed by left subtree and then right subtree. Try implementing it
with a generator.
*/

// Implementation with a generator
class BinaryTreeNode2<T> {
  value: T;
  left: BinaryTreeNode2<T> | undefined;
  right: BinaryTreeNode2<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }
}

function* traversePreOrderGenerator<T>(
  root: BinaryTreeNode2<T>
): IterableIterator<T> {
  yield root.value;

  if (root.left != undefined) {
    for (const value of traversePreOrderGenerator(root.left)) {
      yield value;
    }
  }

  if (root.right != undefined) {
    for (const value of traversePreOrderGenerator(root.right)) {
      yield value;
    }
  }
}

let root2: BinaryTreeNode2<number> = new BinaryTreeNode2(1);
root2.left = new BinaryTreeNode2(2);
root2.left.right = new BinaryTreeNode2(3);
root2.left.left = new BinaryTreeNode2(4);
root2.right = new BinaryTreeNode2(5);
root2.right.right = new BinaryTreeNode2(6);
root2.right.left = new BinaryTreeNode2(7);

const generator = traversePreOrderGenerator(root2);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
