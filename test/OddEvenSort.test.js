import { oddEvenSort } from "../src/Algorithms/OddEvenSort.js";
import { expect } from "chai";



describe('Odd Even Sort Tests', () => {
    it('sort array with single elements', () => {
      const arr = [4];
      const result = oddEvenSort([...arr]);
      expect(result).to.deep.equal([4]);
    });
    it('sort an arbitary array', () => {
      const arr = [4, 3, 1, 3, 8];
      const result = oddEvenSort([...arr]);
      expect(result).to.deep.equal([1, 3, 3, 4, 8]);
    });
    
    it('sort an array which is in ascending', () => {
      const arr = [1, 3, 3, 4, 8];
      const result = oddEvenSort([...arr]);
      expect(result).to.deep.equal([1, 3, 3, 4, 8]);
    });
    it('sort an array which is in descending', () => {
      const arr = [8, 4, 3, 3, 1];
      const result = oddEvenSort([...arr]);
      expect(result).to.deep.equal([1, 3, 3, 4, 8]);
    });
  
  });