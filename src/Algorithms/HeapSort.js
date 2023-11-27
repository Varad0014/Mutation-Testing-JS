export const heapSort = (arr) => {
    const N = arr.length;

    const heapify = (arr, N, i) => {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < N && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < N && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, N, largest);
        }
    };

    for (let i = Math.floor(N / 2) - 1; i >= 0; i--) {
        heapify(arr, N, i);
    }

    for (let i = N - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }

    return arr;
};




