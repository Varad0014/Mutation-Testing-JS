export const bubbleSort = (arr) => {
    let length = arr.length;
    let swapped = false;
    do {
        swapped = false;
        for (let i = 0; i < length; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
};

