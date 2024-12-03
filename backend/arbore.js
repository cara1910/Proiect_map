class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            return;
          }
          current = current.right;
        }
      }
    }
  
    search(value) {
      let current = this.root;
      while (current) {
        if (value === current.value) return true;
        current = value < current.value ? current.left : current.right;
      }
      return false;
    }
  }
  
  function analyzeBinaryTree(numbers, type) {
    const tree = new BinaryTree();
    const startTime = Date.now();
  
    numbers.forEach((num) => tree.insert(num));
    const insertionTime = Date.now() - startTime;
  
    const searchStart = Date.now();
    numbers.forEach((num) => tree.search(num));
    const searchTime = Date.now() - searchStart;
  
    return `Tip: ${type}. Timp inserare: ${insertionTime}ms. Timp căutare: ${searchTime}ms.`;
  }
  
  module.exports = { analyzeBinaryTree };
  