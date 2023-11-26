import Queue from "../src/Data-Structures/Queue.js";
import { expect } from "chai";



describe('Queue Tests', () => {
    describe('.enqueue(element)', () => {
        it('enqueue element to queue', () => {
            const q = new Queue();
            q.enqueue(4);
            const front = q.peek();
            q.enqueue(5);
            expect(front).to.equal(4);
            expect(q.peek()).to.equal(4);
        });
    });
    describe('.size()', () => {
        it('get size of non-empty queue', () => {
            const q = new Queue();
            q.enqueue(4);
            q.enqueue(5);
            q.enqueue(6);
            expect(q.size()).to.equal(3);
        });
        it('get size of empty queue', () => {
            const q = new Queue();
            expect(q.size()).to.equal(0);
        });
    });
    describe('.isEmpty()', () => {
        it('check emptiness of non-empty queue', () => {
            const q = new Queue();
            q.enqueue(4);
            q.enqueue(5);
            q.enqueue(6);
            expect(q.size()).to.equal(3);
            expect(q.isEmpty()).to.equal(false);
        });
        it('check emptiness of empty queue', () => {
            const q = new Queue();
            expect(q.size()).to.equal(0);
            expect(q.isEmpty()).to.equal(true);
        });
    });
    describe('.peek()', () => {
        it('get the front element of non-empty queue', () => {
            const q = new Queue();
            q.enqueue(4);
            q.enqueue(5);
            q.enqueue(6);
            expect(q.peek()).to.equal(4);
        });
        it('get the front element of empty queue', () => {
            const q = new Queue();
            expect(q.peek()).to.equal(null);
        });
    });
    describe('.dequeue()', () => {
        it('dequeue from non-empty queue', () => {
            const q = new Queue();
            q.enqueue(4);
            q.enqueue(5);
            q.enqueue(6);
            expect(q.size()).to.equal(3);
            expect(q.dequeue()).to.equal(4);
            expect(q.size()).to.equal(2);
        });
        it('dequeue from empty queue', () => {
            const q = new Queue();
            expect(q.isEmpty()).to.equal(true);
            expect(() => q.dequeue())
                .to.throws(Error)
                .and.to.have.property(
                    'message',
                    '.dequeue(): Cannot dequeue from empty queue'
                );

        });

    });

    describe('.clear()', () => {
        it('clear a queue', () => {
            const q = new Queue();
            q.enqueue(4);
            q.enqueue(5);
            q.enqueue(6);
            const size = q.size();
            q.clear();
            expect(size).to.equal(3);
            expect(q.isEmpty()).to.equal(true);
            expect(q.size()).to.equal(0);
        });
    });
    
    describe('.toString()', () => {
        it('get string from non-empty queue', () => {
            const q = new Queue();
            q.enqueue(4);
            q.enqueue(5);
            q.enqueue(6);
            expect(q.isEmpty()).to.equal(false);
            expect(q.toString()).to.equal('4,5,6');
        });
        it('get string from empty queue', () => {
            const q = new Queue();
            expect(q.isEmpty()).to.equal(true);
            expect(q.toString()).to.equal('');
        });

    });

});

