import { Node, DoublyNode } from "../src/models/LinkedListModels.js";
import { expect } from "chai";


describe('Linked List Node Tests', () => {
    describe('.getElement()', () => {
        it('get the value of node', () => {
            const node = new Node(4)
            expect(node.getElement()).to.equal(4);
        });
    });
    describe('.setElement()', () => {
        it('set the value of node', () => {
            const node = new Node(4);
            node.setElement(8);
            expect(node.getElement()).to.equal(8);
        });
    });
    describe('.getNext()', () => {
        it('get the next node if next null', () => {
            const node = new Node(4);
            expect(node.getNext()).to.equal(null);
        });
    });
    describe('.setNext()', () => {
        it('set next node', () => {
            const node1 = new Node(4);
            const node2 = new Node(8);
            node1.setNext(node2);
            expect(node1.getNext()).to.equal(node2);
        });
    });
});

describe('Doubly Linked List Node Tests', () => {
    describe('.getElement()', () => {
        it('get the value of node', () => {
            const node = new DoublyNode(4)
            expect(node.getElement()).to.equal(4);
        });
    });
    describe('.setElement()', () => {
        it('set the value of node', () => {
            const node = new DoublyNode(4);
            node.setElement(8);
            expect(node.getElement()).to.equal(8);
        });
    });
    describe('.getNext()', () => {
        it('get the next node if next null', () => {
            const node = new DoublyNode(4);
            expect(node.getNext()).to.equal(null);
        });
    });
    describe('.getPrev()', () => {
        it('get the prev node if prev null', () => {
            const node = new DoublyNode(4);
            expect(node.getPrev()).to.equal(null);
        });
    });
    describe('.setNext()', () => {
        it('set next node', () => {
            const node1 = new DoublyNode(4);
            const node2 = new DoublyNode(8);
            node1.setNext(node2);
            expect(node1.getNext()).to.equal(node2);
        });
    });
    describe('.setPrev()', () => {
        it('set prev node', () => {
            const node1 = new DoublyNode(4);
            const node2 = new DoublyNode(8);
            node1.setPrev(node2);
            expect(node1.getPrev()).to.equal(node2);
        });
    });
});

