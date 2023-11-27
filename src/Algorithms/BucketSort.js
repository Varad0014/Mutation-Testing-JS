import { insertionSort } from "./InsertionSort.js";
export const bucketSort = (arr) => {
    const n = arr.length;
    if (n === 0) {
        return arr;
    }

    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);
    const bucketSize = 5;
    const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    const allBuckets = new Array(bucketCount).fill().map(() => []);

    arr.forEach((currentVal) => {
        allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
    });

    arr.length = 0;
    allBuckets.forEach((bucket) => {
        insertionSort(bucket);
        arr.push(...bucket);
    });

    return arr;
};