export const pigeonholeSort = (nums) => {
    if (nums.length == 0) return [];
    let min_val = nums[0]
    let max_val = nums[0]

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max_val) { max_val = nums[i] }
        if (nums[i] < min_val) { min_val = nums[i] }
    }

    const range = max_val - min_val + 1
    const data = Array(range).fill(0)

    for (let i = 0; i < nums.length; i++) {
        data[nums[i] - min_val]++
    }

    let index = 0

    for (let j = 0; j < range; j++) {
        while (data[j]-- > 0) {
            nums[index++] = j + min_val
        }
    }
    return nums
}
