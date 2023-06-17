// Find the kth largest element in an unsorted array. 

function findKthLargest(nums, k) {
    // Sort the array in descending order
    nums.sort((a, b) => b - a);

    // Return the kth largest element
    return nums[k - 1];
}

// Example usage:
const nums = [3, 1, 7, 5, 2, 4, 6];
const k = 3;
const kthLargest = findKthLargest(nums, k);
console.log(`The ${k}th largest element is:`, kthLargest);
