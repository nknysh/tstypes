/*
Implement a pre-order traversal for a generic binary tree. Pre-order traversal is
parent first, followed by left subtree and then right subtree. Try implementing it
with a generator.
*/

// Implementation without a generator
class BinaryTreeNode<T> {
  value: T;
  left: BinaryTreeNode<T> | undefined;
  right: BinaryTreeNode<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }
}

function traversePreOrder<T>(root: BinaryTreeNode<T>): void {
  console.log(root.value);

  if (root.left != undefined) {
    traversePreOrder(root.left);
  }

  if (root.right != undefined) {
    traversePreOrder(root.right);
  }
}

let root: BinaryTreeNode<number> = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.left.right = new BinaryTreeNode(3);
root.left.left = new BinaryTreeNode(4);
root.right = new BinaryTreeNode(5);
root.right.right = new BinaryTreeNode(6);
root.right.left = new BinaryTreeNode(7);

traversePreOrder(root);
