export class Node {
  constructor(element, next = null) {
    this.element = element;
    this.next = next;
  }
  setElement(element) {
    this.element = element;
    return this;
  }

  getElement() {
    return this.element;
  }

  setNext(next) {
    this.next = next || null;
  }

  getNext() {
    return this.next;
  }

};

export class DoublyNode extends Node {
    constructor(element, next=null, prev=null) {
        super(element, next);
        this.prev = prev;
    }
    setElement(element) {
      this.element = element;
    }
  
    getElement() {
      return this.element;
    }
  
    setNext(next) {
      this.next = next || null;
    }
  
    getNext() {
      return this.next;
    }
    setPrev(prev) {
      this.prev = prev || null;
    }
  
    getPrev() {
      return this.prev;
    }
}