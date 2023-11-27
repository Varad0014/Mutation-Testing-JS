import LinkedList from './LinkedList.js';
import { DoublyNode } from '../models/LinkedListModels.js';

export default class DoublyLinkedList extends LinkedList {
    constructor() {
        super();
        this.tail = null;
    }

    push(element) {
        const node = new DoublyNode(element);
        if (this.head == null) {
            this.head = node;
            this.tail = node; // NEW
        } else {
            this.tail.setNext(node);
            node.setPrev(this.tail);
            this.tail = node;
        }
        this.count++;
    }

    insertAt(element, index) {
        if (index < 0 || index > this.count) {
            throw new Error('.insertAt: Index out of bounds error');
        }
        const node = new DoublyNode(element);
        let current = this.head;
        if (index === 0) {
            if (this.head == null) { // NEW
                this.head = node;
                this.tail = node; // NEW
            } else {
                node.setNext(this.head);
                this.head.setPrev(node); // NEW
                this.head = node;
            } 
        } else if (index === this.count) { // last item NEW
            current = this.tail;
            current.setNext(node);
            node.setPrev(current);
            this.tail = node;
        } else {
            const previous = this.getElementAt(index - 1);
            current = previous.getNext();
            node.setNext(current);
            previous.setNext(node);
            current.setPrev(node); // NEW
            node.setPrev(previous); // NEW
        }
        this.count++;
    }

    removeAt(index) {
        if (index < 0 || index >= this.count) {
            throw new Error('.removeAt: Index out of bounds error');
        }

        let current = this.head;
        if (index === 0) {
            this.head = this.head.getNext();
            if (this.count === 1) {
                this.tail = null;
            } else {
                this.head.setPrev(null);
            }
        } else if (index === this.count - 1) {
            current = this.tail;
            this.tail = current.getPrev();
            this.tail.setNext(null);
        } else {
            current = this.getElementAt(index);
            const previous = current.getPrev();
            previous.setNext(current.getNext());
            current.getNext().setPrev(previous); // NEW
        }
        this.count--;
        return current.getElement();

    }

    indexOf(element) {
        let current = this.head;
        let index = 0;
        while (current != null) {
            if (element === current.getElement()) {
                return index;
            }
            index++;
            current = current.getNext();
        }
        return -1;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    isEmpty() {
        return this.size() === 0;
    }

    size() {
        return this.count;
    }

    clear() {
        super.clear();
        this.tail = null;
    }

    toString() {
        if (this.head == null) {
            return '';
        }
        let objString = `${this.head.getElement()}`;
        let current = this.head.getNext();
        while (current != null) {
            objString = `${objString},${current.getElement()}`;
            current = current.getNext();
        }
        return objString;
    }

    inverseToString() {
        if (this.tail == null) {
            return '';
        }
        let objString = `${this.tail.getElement()}`;
        let previous = this.tail.getPrev();
        while (previous != null) {
            objString = `${objString},${previous.getElement()}`;
            previous = previous.getPrev();
        }
        return objString;
    }
}