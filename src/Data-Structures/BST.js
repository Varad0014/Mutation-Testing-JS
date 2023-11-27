import { TreeNode } from "../../models/TreeModels.js";

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    if (this.root === null) {
      this.root = new TreeNode(key);
    } else {
      this._insertNode(this.root, key);
    }
  }

  _insertNode(node, key) {
    if (key < node.key) {
      if (node.left === null) {
        node.left = new TreeNode(key);
      } else {
        this._insertNode(node.left, key);
      }
    } else {
      if (node.right === null) {
        node.right = new TreeNode(key);
      } else {
        this._insertNode(node.right, key);
      }
    }
  }

  getRoot() {
    return this.root;
  }

  search(key) {
    return this._searchNode(this.root, key);
  }

  _searchNode(node, key) {
    if (node === null) {
      return false;
    }

    if (key < node.key) {
      return this._searchNode(node.left, key);
    } else if (key > node.key) {
      return this._searchNode(node.right, key);
    }

    return true;
  }

  inOrderTraverse(callback) {
    this._inOrderTraverseNode(this.root, callback);
  }

  _inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this._inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback) {
    this._preOrderTraverseNode(this.root, callback);
  }

  _preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this._preOrderTraverseNode(node.left, callback);
      this._preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback) {
    this._postOrderTraverseNode(this.root, callback);
  }

  _postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this._postOrderTraverseNode(node.left, callback);
      this._postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  findMin() {
    return this._findMinNode(this.root);
  }

  _findMinNode(node) {
    let current = node;
    while (current !== null && current.left !== null) {
      current = current.left;
    }
    return current;
  }

  findMax() {
    return this._findMaxNode(this.root);
  }

  _findMaxNode(node) {
    let current = node;
    while (current !== null && current.right !== null) {
      current = current.right;
    }
    return current;
  }

  remove(key) {
    this.root = this._removeNode(this.root, key);
  }

  _removeNode(node, key) {
    if (node === null) {
      return null;
    }

    if (key < node.key) {
      node.left = this._removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this._removeNode(node.right, key);
      return node;
    }

    // Key is equal to node.key, handle three cases
    // Case 1: Leaf node
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    }

    // Case 2: Node with only one child
    if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    }

    // Case 3: Node with two children
    const minRightNode = this._findMinNode(node.right);
    node.key = minRightNode.key;
    node.right = this._removeNode(node.right, minRightNode.key);
    return node;
  }
}
