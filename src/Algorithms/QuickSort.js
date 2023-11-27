
export const quickSort = (arr) => {
    const partition = (arr, start, end) => {
        const pivot = arr[end];
        let p = start;

        for (let i = start; i < end; i++) {
            if (arr[i] <= pivot) {
                [arr[i], arr[p]] = [arr[p], arr[i]];
                p++;
            }
        }

        [arr[p], arr[end]] = [arr[end], arr[p]];
        return p;
    };

    const quicksort = (arr, start, end) => {
        if (start < end) {
            const p = partition(arr, start, end);
            quicksort(arr, start, p - 1);
            quicksort(arr, p + 1, end);
        }
    };

    quicksort(arr, 0, arr.length - 1);
    return arr;
};