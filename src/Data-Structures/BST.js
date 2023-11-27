import { TreeNode } from "../models/TreeModels.js";

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
        if (key < node.getKey()) {
            if (node.getLeft() === null) {
                node.setLeft(new TreeNode(key));
            } else {
                this._insertNode(node.getLeft(), key);
            }
        } else {
            if (node.getRight() === null) {
                node.setRight(new TreeNode(key));
            } else {
                this._insertNode(node.getRight(), key);
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

        if (key < node.getKey()) {
            return this._searchNode(node.getLeft(), key);
        } else if (key > node.getKey()) {
            return this._searchNode(node.getRight(), key);
        }

        return true;
    }

    inOrderTraverse(callback) {
        this._inOrderTraverseNode(this.root, callback);
    }

    _inOrderTraverseNode(node, callback) {
        if (node !== null) {
            this._inOrderTraverseNode(node.getLeft(), callback);
            callback(node.getKey());
            this._inOrderTraverseNode(node.getRight(), callback);
        }
    }

    preOrderTraverse(callback) {
        this._preOrderTraverseNode(this.root, callback);
    }

    _preOrderTraverseNode(node, callback) {
        if (node !== null) {
            callback(node.getKey());
            this._preOrderTraverseNode(node.getLeft(), callback);
            this._preOrderTraverseNode(node.getRight(), callback);
        }
    }

    postOrderTraverse(callback) {
        this._postOrderTraverseNode(this.root, callback);
    }

    _postOrderTraverseNode(node, callback) {
        if (node !== null) {
            this._postOrderTraverseNode(node.getLeft(), callback);
            this._postOrderTraverseNode(node.getRight(), callback);
            callback(node.getKey());
        }
    }

    findMin() {
        return this._findMinNode(this.root).getKey();
    }

    _findMinNode(node) {
        let current = node;
        while (current !== null && current.getLeft() !== null) {
            current = current.getLeft();
        }
        return current;
    }

    findMax() {
        return this._findMaxNode(this.root).getKey();
    }

    _findMaxNode(node) {
        let current = node;
        while (current !== null && current.getRight() !== null) {
            current = current.getRight();
        }
        return current;
    }
    
    findCeil(key) {
        return this._findCeilNode(this.root, key);
    }

    _findCeilNode(node, key, ceil = null) {
        if (node === null) {
            return ceil;
        }

        if (node.getKey() === key) {
            return node.getKey();
        } else if (node.getKey() < key) {
            return this._findCeilNode(node.getRight(), key, ceil);
        } else {
            ceil = node.getKey();
            return this._findCeilNode(node.getLeft(), key, ceil);
        }
    }

    findFloor(key) {
        return this._findFloorNode(this.root, key);
    }

    _findFloorNode(node, key, floor = null) {
        if (node === null) {
            return floor;
        }

        if (node.getKey() === key) {
            return node.getKey();
        } else if (node.getKey() > key) {
            return this._findFloorNode(node.getLeft(), key, floor);
        } else {
            floor = node.getKey();
            return this._findFloorNode(node.getRight(), key, floor);
        }
    }

    remove(key) {
        this.root = this._removeNode(this.root, key);
    }

    _removeNode(node, key) {
        if (node === null) {
            return null;
        }

        if (key < node.getKey()) {
            node.setLeft(this._removeNode(node.getLeft(), key));
            return node;
        } else if (key > node.getKey()) {
            node.setRight(this._removeNode(node.getRight(), key));
            return node;
        }

        // Key is equal to node.key, handle three cases
        // Case 1: Leaf node
        if (node.getLeft() === null && node.getRight() === null) {
            node = null;
            return node;
        }

        // Case 2: Node with only one child
        if (node.getLeft() === null) {
            node = node.getRight();
            return node;
        } else if (node.getRight() === null) {
            node = node.getLeft();
            return node;
        }

        // Case 3: Node with two children
        const minRightNode = this._findMinNode(node.getRight());
        node.setKey(minRightNode.getKey());
        node.setRight(this._removeNode(node.getRight(), minRightNode.getKey()));
        return node;
    }
}
