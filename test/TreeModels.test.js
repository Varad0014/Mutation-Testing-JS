import { TreeNode } from "../src/models/TreeModels.js";
import { expect } from "chai";


describe('Tree Node Tests', () => {
    describe('.getKey()', () => {
        it('get value of node', () => {
            const node = new TreeNode(4);
            expect(node.getKey()).to.equal(4);
        });
    });
    describe('.setKey()', () => {
        it('get value of node', () => {
            const node = new TreeNode(4);
            node.setKey(8);
            expect(node.getKey()).to.equal(8);
        });
    });
    describe('.getLeft()', () => {
        it('get left node', () => {
            const node = new TreeNode(4);
            expect(node.getLeft()).to.equal(null);
        });
    });
    describe('.getRight()', () => {
        it('get right node', () => {
            const node = new TreeNode(4);
            expect(node.getRight()).to.equal(null);
        });
    });
    
});

