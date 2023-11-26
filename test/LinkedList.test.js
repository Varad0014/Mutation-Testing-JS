import LinkedList from "../src/Data-Structures/LinkedList.js";
import { expect } from "chai";




describe('Linked List Tests', () => {
    describe('.getHead()', () => {
        it('get the head of linked list', () => {
            const linkedList = new LinkedList();
            expect(linkedList.getHead()).to.equal(null);
        });
    });

    describe('.push(element)', () => {
        it('insert node at end', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            const head = linkedList.getHead();
            linkedList.push(2);
            expect(linkedList.getHead().getElement()).to.equal(1);
            expect(linkedList.getHead().getNext().getElement()).to.equal(2);
            expect(linkedList.getHead()).to.equal(head);
            expect(linkedList.size()).to.equal(2);
        });
    });

    describe('.size()', () => {
        it('get the size of empty linked list', () => {
            const linkedList = new LinkedList();
            expect(linkedList.size()).to.equal(0);
        });
        it('get the size of linked list', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            expect(linkedList.size()).to.equal(3);
        });
    });

    describe('.isEmpty()', () => {
        it('Check emptiness of empty linked list', () => {
            const linkedList = new LinkedList();
            expect(linkedList.isEmpty()).to.equal(true);
            expect(linkedList.size()).to.equal(0);
        });
        it('Check emptiness of non empty linked list', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            expect(linkedList.isEmpty()).to.equal(false);
            expect(linkedList.size()).to.equal(3);
        });
    });

    describe('.clear()', () => {
        it('clear the linked list', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            const empty = linkedList.isEmpty();
            linkedList.clear();
            expect(empty).to.equal(false);
            expect(linkedList.getHead()).to.equal(null);
            expect(linkedList.isEmpty()).to.equal(true);
            expect(linkedList.size()).to.equal(0);
        });
    });
    describe('.toString()', () => {
        it('get string of elements if empty', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            expect(linkedList.toString()).to.equal('1,2,3');
        });
        it('get string of elements if non-empty', () => {
            const linkedList = new LinkedList();
            expect(linkedList.toString()).to.equal('');
        });
    });
    describe('.indexOf(element)', () => {
        it('get index of element with element in list', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            expect(linkedList.size()).to.equal(4);
            expect(linkedList.indexOf(2)).to.equal(1);
        });
        it('get index of element with element not in list', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            expect(linkedList.size()).to.equal(4);
            expect(linkedList.indexOf(7)).to.equal(-1);
        });
    });
    describe('.getElementAt(index)', () => {
        it('get element if valid index', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            expect(linkedList.size()).to.equal(4);
            expect(linkedList.getElementAt(0).getElement()).to.equal(1);
            expect(linkedList.getElementAt(1).getElement()).to.equal(2);
        });
        it('get element if invalid index', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            expect(linkedList.size()).to.equal(4);
            expect(() => linkedList.getElementAt(4))
                .to.throws(Error)
                .and.to.have.property(
                    'message',
                    '.getElementAt: Index out of bounds error'
                );
        });
        it('get element if invalid index', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            expect(linkedList.size()).to.equal(4);
            expect(() => linkedList.getElementAt(-1))
                .to.throws(Error)
                .and.to.have.property(
                    'message',
                    '.getElementAt: Index out of bounds error'
                );
        });

    });
    describe('.removeAt(index)', () => {
        it('remove with valid index', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            const initialSize = linkedList.size();
            const firstRemoved = linkedList.removeAt(0);
            expect(initialSize).to.equal(4);
            expect(firstRemoved).to.equal(1);
            expect(linkedList.removeAt(1)).to.equal(3);
            expect(linkedList.size()).to.equal(2);
        });
        it('remove with invalid index(pos)', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            expect(linkedList.size()).to.equal(4);
            expect(() => linkedList.removeAt(4))
                .to.throws(Error)
                .and.to.have.property(
                    'message',
                    '.removeAt: Index out of bounds error'
                );
            expect(linkedList.size()).to.equal(4);
        });
        it('remove with invalid index(neg)', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            expect(linkedList.size()).to.equal(4);
            expect(() => linkedList.removeAt(-1))
                .to.throws(Error)
                .and.to.have.property(
                    'message',
                    '.removeAt: Index out of bounds error'
                );
            expect(linkedList.size()).to.equal(4);
        });

    });
    describe('.remove(element)', () => {
        it('remove with element present', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            expect(linkedList.size()).to.equal(4);
            linkedList.remove(2);
            expect(linkedList.size()).to.equal(3);
        });
        it('remove with element not present', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            expect(linkedList.size()).to.equal(4);
            expect(() => linkedList.remove(6))
                .to.throws(Error)
                .and.to.have.property(
                    'message',
                    '.remove: Element not found'
                );
            expect(linkedList.size()).to.equal(4);
        });
    });
    describe('.insert(element, index)', () => {
        it('insert at index 0', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            linkedList.insertAt(0, 0);
            expect(linkedList.size()).to.equal(5);
            expect(linkedList.getElementAt(0).getElement()).to.equal(0);
        });
        it('insert at last index', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            linkedList.insertAt(5, 4)
            expect(linkedList.size()).to.equal(5);
            expect(linkedList.getElementAt(4).getElement()).to.equal(5);
        });
        it('insert in between', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            linkedList.insertAt(9, 2);
            expect(linkedList.size()).to.equal(5);
            expect(linkedList.getElementAt(2).getElement()).to.equal(9);
        });
        it('insert at invalid index', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            expect(()=>linkedList.insertAt(10, 5))
            .to.throws(Error)
            .and.to.have.property(
                'message',
                '.insertAt: Index out of bounds error'
            );
            expect(linkedList.size()).to.equal(4);
        });
        it('insert at invalid index', () => {
            const linkedList = new LinkedList();
            linkedList.push(1);
            linkedList.push(2);
            linkedList.push(3);
            linkedList.push(4);
            expect(()=>linkedList.insertAt(10, -1))
            .to.throws(Error)
            .and.to.have.property(
                'message',
                '.insertAt: Index out of bounds error'
            );
            expect(linkedList.size()).to.equal(4);
        });
        
    });
});

