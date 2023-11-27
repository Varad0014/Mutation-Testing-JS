import { BinarySearchTree } from '../src/Data-Structures/BST.js';
import { expect } from 'chai';


describe('BST Tests', () => {
  describe('.getRoot()', () => {
    it('get root of BST', () => {
      const bst = new BinarySearchTree();
      expect(bst.getRoot()).to.equal(null);
    });
  });

  describe('.insert(key)', () => {
    it('insert element', () => {
      const bst = new BinarySearchTree();
      bst.insert(10);
      expect(bst.getRoot().key).to.equal(10);
    });
  });

  describe('.inOrderTraverse(callback)', () => {
    it('insert elements and perform inorder traversal', () => {
      const bst = new BinarySearchTree();
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      const result = [];
      bst.inOrderTraverse((key) => result.push(key));
      expect(bst.getRoot().key).to.equal(10);
      expect(result).to.deep.equal([3, 5, 10, 15]);
    });

  });
  describe('.preOrderTraverse(callback)', () => {

    it('insert elements and perform preorder traversal', () => {
      const bst = new BinarySearchTree();
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      const result = [];
      bst.preOrderTraverse((key) => result.push(key));
      expect(bst.getRoot().key).to.equal(10);
      expect(result).to.deep.equal([10, 5, 3, 15]);
    });

  });
  describe('.postOrderTraverse(callback)', () => {
    it('insert elements and perform postrder traversal', () => {
      const bst = new BinarySearchTree();
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      const result = [];
      bst.postOrderTraverse((key) => result.push(key));
      expect(bst.getRoot().key).to.equal(10);
      expect(result).to.deep.equal([3, 5, 15, 10]);
    });

  });



  describe('.search(key)', () => {
    it('search for an existing element', () => {
      const bst = new BinarySearchTree();
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      expect(bst.search(5)).to.equal(true);
    });

    it('search for a non-existing element', () => {
      const bst = new BinarySearchTree();
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(13);
      expect(bst.search(8)).to.equal(false);
    });
  });

  describe('.findMin()', () => {
    it('find the minimum element', () => {
      const bst = new BinarySearchTree();
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      expect(bst.findMin().key).to.equal(3);
    });
  });
  describe('.findMax()', () => {
    it('find the maximum element', () => {
      const bst = new BinarySearchTree();
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      expect(bst.findMax().key).to.equal(15);
    });
  });

  describe('.remove(key)', () => {
    it('remove a leaf node', () => {
      const bst = new BinarySearchTree();
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      const initialResult = [];
      bst.inOrderTraverse((key) => initialResult.push(key));
      bst.remove(3);
      const result = [];
      bst.inOrderTraverse((key) => result.push(key));
      expect(initialResult).to.deep.equal([3, 5, 10, 15]);
      expect(result).to.deep.equal([5, 10, 15]);
    });

    it('remove a node with one child', () => {
      const bst = new BinarySearchTree();
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      const initialResult = [];
      bst.inOrderTraverse((key) => initialResult.push(key));
      bst.remove(5);
      const result = [];
      bst.inOrderTraverse((key) => result.push(key));
      expect(initialResult).to.deep.equal([3, 5, 10, 15]);
      expect(result).to.deep.equal([3, 10, 15]);
    });

    it('remove a node with two children', () => {
      const bst = new BinarySearchTree();
      bst.insert(10);
      bst.insert(5);
      bst.insert(15);
      bst.insert(3);
      bst.insert(7);
      const initialResult = [];
      bst.inOrderTraverse((key) => initialResult.push(key));
      bst.remove(5);
      const result = [];
      bst.inOrderTraverse((key) => result.push(key));
      expect(initialResult).to.deep.equal([3, 5, 7, 10, 15]);
      expect(result).to.deep.equal([3, 7, 10, 15]);
    });
  });
});