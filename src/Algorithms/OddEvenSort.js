export const oddEvenSort = (arr) => {
    var n = arr.length
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        let temp = 0;
        // Perform Bubble sort on odd indexed element
        for (let i = 1; i <= n - 2; i = i + 2) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSorted = false;
            }
        }
        // Perform Bubble sort on even indexed element
        for (let i = 0; i <= n - 2; i = i + 2) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                isSorted = false;
            }
        }
    }
    return arr;
}