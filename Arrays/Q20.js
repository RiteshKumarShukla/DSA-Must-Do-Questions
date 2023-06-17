// Given an array, find the subarray with the maximum sum.

function findMaxSubarraySum(nums) {
    let maxSum = nums[0]; // Initialize maxSum with the first element
    let currentSum = nums[0]; // Initialize currentSum with the first element

    for (let i = 1; i < nums.length; i++) {
        // Calculate the sum of the current element and the previous subarray sum
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update the maximum sum if the current sum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = findMaxSubarraySum(nums);
console.log("Maximum subarray sum:", maxSum);
