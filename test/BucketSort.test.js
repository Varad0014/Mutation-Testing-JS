import { bucketSort } from "../src/Algorithms/BucketSort.js";
import { expect } from "chai";



describe('Bucket Sort Tests', () => {
    it('sort array with no elements', () => {
      const arr = [];
      const result = bucketSort([...arr]);
      expect(result).to.deep.equal([]);
    });
    it('sort array with single elements', () => {
      const arr = [4];
      const result = bucketSort([...arr]);
      expect(result).to.deep.equal([4]);
    });
    it('sort an arbitary array', () => {
      const arr = [4, 3, 1, 3, 8];
      const result = bucketSort([...arr]);
      expect(result).to.deep.equal([1, 3, 3, 4, 8]);
    });
    
    it('sort an array which is in ascending', () => {
      const arr = [1, 3, 3, 4, 8];
      const result = bucketSort([...arr]);
      expect(result).to.deep.equal([1, 3, 3, 4, 8]);
    });
    it('sort an array which is in descending', () => {
      const arr = [8, 4, 3, 3, 1];
      const result = bucketSort([...arr]);
      expect(result).to.deep.equal([1, 3, 3, 4, 8]);
    });
  
  });