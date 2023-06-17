// Rotate an array to the right by K steps.

function rotateArray(nums, k) {
    // Normalize the value of k
    k = k % nums.length;

    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);

    // Reverse the first K elements
    reverse(nums, 0, k - 1);

    // Reverse the remaining elements
    reverse(nums, k, nums.length - 1);

    return nums;
}

function reverse(nums, start, end) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

// Example usage:
const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const rotatedArray = rotateArray(nums, k);
console.log("Rotated Array:", rotatedArray);
// Rotated Array: [5, 6, 7, 1, 2, 3, 4]

