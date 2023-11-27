import DoublyLinkedList from "../src/Data-Structures/DoublyLinkedList.js";
import { expect } from "chai";




describe('Doubly Linked List Tests', () => {
    describe('.getHead()', () => {
        it('get the head of linked list', () => {
            const doublyLinkedList = new DoublyLinkedList();
            expect(doublyLinkedList.getHead()).to.equal(null);
        });
    });
    describe('.getTail()', () => {
        it('get the head of linked list', () => {
            const doublyLinkedList = new DoublyLinkedList();
            expect(doublyLinkedList.getTail()).to.equal(null);
        });
    });

    describe('.push(element)', () => {
        it('insert node at end', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            const head = doublyLinkedList.getHead();
            const tail = doublyLinkedList.getTail();
            doublyLinkedList.push(2);
            expect(head).to.equal(tail);
            expect(doublyLinkedList.getHead().getElement()).to.equal(1);
            expect(doublyLinkedList.getHead().getNext().getElement()).to.equal(2);
            expect(doublyLinkedList.getHead()).to.equal(head);
            expect(doublyLinkedList.getTail().getElement()).to.equal(2);
            expect(doublyLinkedList.size()).to.equal(2);
        });
    });

    describe('.size()', () => {
        it('get the size of empty doubly linked list', ()=>{
            const doublyLinkedList = new DoublyLinkedList();
            expect(doublyLinkedList.size()).to.equal(0);
        })
        it('get the size of doubly linked list', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            doublyLinkedList.push(2);
            doublyLinkedList.push(3);
            expect(doublyLinkedList.size()).to.equal(3);
        });
    });

    describe('.isEmpty()', () => {
        it('Check emptiness of empty doubly linked list', () => {
            const doublyLinkedList = new DoublyLinkedList();
            expect(doublyLinkedList.isEmpty()).to.equal(true);
            expect(doublyLinkedList.size()).to.equal(0);
        });
        it('Check emptiness of non empty linked list', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            doublyLinkedList.push(2);
            doublyLinkedList.push(3);
            expect(doublyLinkedList.isEmpty()).to.equal(false);
            expect(doublyLinkedList.size()).to.equal(3);
        });
    });

    describe('.clear()', () => {
        it('clear the linked list', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            doublyLinkedList.push(2);
            doublyLinkedList.push(3);
            const empty = doublyLinkedList.isEmpty();
            doublyLinkedList.clear();
            expect(empty).to.equal(false);
            expect(doublyLinkedList.getHead()).to.equal(null);
            expect(doublyLinkedList.getTail()).to.equal(null);
            expect(doublyLinkedList.isEmpty()).to.equal(true);
            expect(doublyLinkedList.size()).to.equal(0);
        });
    });
    describe('.toString()', () => {
        it('get string of elements if non-empty', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            doublyLinkedList.push(2);
            doublyLinkedList.push(3);
            expect(doublyLinkedList.toString()).to.equal('1,2,3');
        });
        it('get string of elements empty', () => {
            const doublyLinkedList = new DoublyLinkedList();
            expect(doublyLinkedList.toString()).to.equal('');
        });
    });
    describe('.inverseToString()', () => {
        it('get inverse string of elements if non-empty', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            doublyLinkedList.push(2);
            doublyLinkedList.push(3);
            expect(doublyLinkedList.inverseToString()).to.equal('3,2,1');
        });
        it('get inverse string of elements if empty', () => {
            const doublyLinkedList = new DoublyLinkedList();
            expect(doublyLinkedList.inverseToString()).to.equal('');
        });
    });
    describe('.indexOf(element)', () => {
        it('get index of element with element in list', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            doublyLinkedList.push(2);
            doublyLinkedList.push(3);
            doublyLinkedList.push(4);
            expect(doublyLinkedList.size()).to.equal(4);
            expect(doublyLinkedList.indexOf(2)).to.equal(1);
        });
        it('get index of element with element not in list', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            doublyLinkedList.push(2);
            doublyLinkedList.push(3);
            doublyLinkedList.push(4);
            expect(doublyLinkedList.size()).to.equal(4);
            expect(doublyLinkedList.indexOf(7)).to.equal(-1);
        });
    });
    
    describe('.removeAt(index)', () => {
        it('remove with valid index', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            doublyLinkedList.push(2);
            doublyLinkedList.push(3);
            doublyLinkedList.push(4);
            const initialSize = doublyLinkedList.size();
            const firstRemoved = doublyLinkedList.removeAt(0);
            expect(initialSize).to.equal(4);
            expect(firstRemoved).to.equal(1);
            expect(doublyLinkedList.removeAt(1)).to.equal(3);
            expect(doublyLinkedList.size()).to.equal(2);
        });
        it('remove with invalid index(pos)', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            doublyLinkedList.push(2);
            doublyLinkedList.push(3);
            doublyLinkedList.push(4);
            expect(doublyLinkedList.size()).to.equal(4);
            expect(() => doublyLinkedList.removeAt(4))
                .to.throws(Error)
                .and.to.have.property(
                    'message',
                    '.removeAt: Index out of bounds error'
                );
            expect(doublyLinkedList.size()).to.equal(4);
        });
        it('remove with invalid index(neg)', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            doublyLinkedList.push(2);
            doublyLinkedList.push(3);
            doublyLinkedList.push(4);
            expect(doublyLinkedList.size()).to.equal(4);
            expect(() => doublyLinkedList.removeAt(-1))
                .to.throws(Error)
                .and.to.have.property(
                    'message',
                    '.removeAt: Index out of bounds error'
                );
            expect(doublyLinkedList.size()).to.equal(4);
        });

    });
   
    describe('.insertAt(element, index)', () => {

        it('insert at index 0 in empty list', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.insertAt(0, 0);
            expect(doublyLinkedList.size()).to.equal(1);
            expect(doublyLinkedList.getElementAt(0).getElement()).to.equal(0);
        });
        it('insert at index 0', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            doublyLinkedList.push(2);
            doublyLinkedList.push(3);
            doublyLinkedList.push(4);
            doublyLinkedList.insertAt(0, 0);
            expect(doublyLinkedList.size()).to.equal(5);
            expect(doublyLinkedList.getElementAt(0).getElement()).to.equal(0);
        });
        it('insert at last index', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            doublyLinkedList.push(2);
            doublyLinkedList.push(3);
            doublyLinkedList.push(4);
            doublyLinkedList.insertAt(5, 4)
            expect(doublyLinkedList.size()).to.equal(5);
            expect(doublyLinkedList.getElementAt(4).getElement()).to.equal(5);
        });
        it('insert in between', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            doublyLinkedList.push(2);
            doublyLinkedList.push(3);
            doublyLinkedList.push(4);
            doublyLinkedList.insertAt(9, 2);
            expect(doublyLinkedList.size()).to.equal(5);
            expect(doublyLinkedList.getElementAt(2).getElement()).to.equal(9);
        });
        it('insert at invalid index', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            doublyLinkedList.push(2);
            doublyLinkedList.push(3);
            doublyLinkedList.push(4);
            expect(()=>doublyLinkedList.insertAt(10, 5))
            .to.throws(Error)
            .and.to.have.property(
                'message',
                '.insertAt: Index out of bounds error'
            );
            expect(doublyLinkedList.size()).to.equal(4);
        });
        it('insert at invalid index', () => {
            const doublyLinkedList = new DoublyLinkedList();
            doublyLinkedList.push(1);
            doublyLinkedList.push(2);
            doublyLinkedList.push(3);
            doublyLinkedList.push(4);
            expect(()=>doublyLinkedList.insertAt(10, -1))
            .to.throws(Error)
            .and.to.have.property(
                'message',
                '.insertAt: Index out of bounds error'
            );
            expect(doublyLinkedList.size()).to.equal(4);
        });

    });
});

