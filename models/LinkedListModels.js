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
    return this;
  }

  getNext() {
    return this.next;
  }

};

export class DoublyNode extends Node {
    constructor(element, next, prev) {
        super(element, next);
        this.prev = prev;
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
      return this;
    }
  
    getNext() {
      return this.next;
    }
    setPrev(prev) {
      
      this.prev = prev || null;
      return this;
    }
  
    getPrev() {
      return this.prev;
    }
}