
export const countSort = (arr) => {
    const n = arr.length;
    let maxElement = Math.max(...arr);
    let counts = new Array(maxElement + 1).fill(0);
    let newArray = [];

    for (let i = 0; i < n; i++) {
        counts[arr[i]]++;
    }
    console.log(counts);
    for (let i = 0; i <= maxElement; i++) {
        while (counts[i] > 0) {
            newArray.push(i);
            counts[i]--;
        }
    }

    return newArray;
};
