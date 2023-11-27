
import { Node } from '../models/LinkedListModels.js';


export default class LinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.getNext() != null) {
        current = current.getNext();
      }
      current.setNext(node);
    }
    this.count++;
  }

  getElementAt(index) {
    if (index < 0 || index >= this.count) {
      throw new Error('.getElementAt: Index out of bounds error');
    }
    let node = this.head;
    for (let i = 0; i < index && node != null; i++) {
      node = node.getNext();
    }
    return node;


  }

  insertAt(element, index) {
    if (index < 0 || index > this.count) {
      throw new Error('.insertAt: Index out of bounds error');
    }
    const node = new Node(element);
    if (index === 0) {
      const current = this.head;
      node.setNext(current);
      this.head = node;
    } else {
      const previous = this.getElementAt(index - 1);
      node.setNext(previous.getNext());
      previous.setNext(node);
    }
    this.count++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) {
      throw new Error('.removeAt: Index out of bounds error');
    }
    let current = this.head;
    if (index === 0) {
      this.head = current.getNext();
    } else {
      const previous = this.getElementAt(index - 1);
      current = previous.getNext();
      previous.setNext(current.getNext());
    }
    this.count--;
    return current.getElement();
  }

  remove(element) {
    const index = this.indexOf(element);
    if(index === -1){
      throw new Error('.remove: Element not found');
    }
    return this.removeAt(index);
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.size() && current != null; i++) {
      if (element === current.getElement()) {
        return i;
      }
      current = current.getNext();
    }
    return -1;
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count;
  }

  getHead() {
    return this.head;
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.getElement()}`;
    let current = this.head.getNext();
    for (let i = 1; i < this.size() && current != null; i++) {
      objString = `${objString},${current.getElement()}`;
      current = current.getNext();
    }
    return objString;
  }
}