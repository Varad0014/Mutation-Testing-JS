import Stack from "../src/Data-Structures/Stack.js";
import { expect } from "chai";



describe('Stack Tests', () => {
    describe('.push(element)', () => {
        it('push element to stack', () => {
            const st = new Stack();
            st.push(1);
            const top = st.peek();
            st.push(2);
            expect(top).to.equal(1);
            expect(st.peek()).to.equal(2);
        });
    });
    describe('.size()', () => {
        it('get size of non-empty stack', () => {
            const st = new Stack();
            st.push(1);
            st.push(2);
            st.push(3);
            expect(st.size()).to.equal(3);
        });
        it('get size of empty stack', () => {
            const st = new Stack();
            expect(st.size()).to.equal(0);
        });
    });
    describe('.isEmpty()', () => {
        it('check emptiness of non-empty stack', () => {
            const st = new Stack();
            st.push(1);
            st.push(2);
            st.push(3);
            expect(st.size()).to.equal(3);
            expect(st.isEmpty()).to.equal(false);
        });
        it('check emptiness of non-empty stack', () => {
            const st = new Stack();
            expect(st.size()).to.equal(0);
            expect(st.isEmpty()).to.equal(true);
        });
    });
    describe('.peek()', () => {
        it('get the top element of non-empty stack', () => {
            const st = new Stack();
            st.push(1);
            st.push(2);
            st.push(3);
            expect(st.peek()).to.equal(3);
        });
        it('get the top element of empty stack', () => {
            const st = new Stack();
            expect(st.peek()).to.equal(null);
        });
    });
    describe('.pop()', () => {
        it('pop from non-empty stack', () => {
            const st = new Stack();
            st.push(1);
            st.push(2);
            st.push(3);
            expect(st.size()).to.equal(3);
            expect(st.pop()).to.equal(3);
            expect(st.size()).to.equal(2);
        });
        it('pop from empty stack', () => {
            const st = new Stack();
            expect(st.isEmpty()).to.equal(true);
            expect(() => st.pop())
                .to.throws(Error)
                .and.to.have.property(
                    'message',
                    '.pop(): Cannot pop from empty stack'
                );

        });

    });

    describe('.clear()', () => {
        it('clear a stack', () => {
            const st = new Stack();
            st.push(1);
            st.push(2);
            st.push(3);
            const size = st.size();
            st.clear();
            expect(size).to.equal(3);
            expect(st.isEmpty()).to.equal(true);
            expect(st.size()).to.equal(0);
        });
    });
    
    describe('.toString()', () => {
        it('get string from non-empty stack', () => {
            const st = new Stack();
            st.push(1);
            st.push(2);
            st.push(3);
            expect(st.isEmpty()).to.equal(false);
            expect(st.toString()).to.equal('1,2,3');
        });
        it('get string from empty stack', () => {
            const st = new Stack();
            expect(st.isEmpty()).to.equal(true);
            expect(st.toString()).to.equal('');
        });

    });

});

