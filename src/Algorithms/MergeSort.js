export const mergeSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    const merge = (left, right) => {
        let resultArray = [], leftIndex = 0, rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex++]);
            } else {
                resultArray.push(right[rightIndex++]);
            }
        }

        return resultArray.concat(left.slice(leftIndex), right.slice(rightIndex));
    };

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
};