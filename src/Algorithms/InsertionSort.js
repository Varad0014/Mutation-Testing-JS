export const insertionSort = (arr) => {
    const length = arr.length;
    for (let i = 1; i < length; i++) {
        const current = arr[i];
        let j;

        for (j = i - 1; j >= 0 && arr[j] > current; j--) {
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = current;
    }

    return arr;
};