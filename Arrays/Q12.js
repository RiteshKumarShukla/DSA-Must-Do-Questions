//  Given an array of integers, find the maximum subarray sum.

function findMaxSubarraySum(nums) {
    let maxSum = nums[0]; // Initialize maxSum with the first element
    let currentSum = nums[0]; // Initialize currentSum with the first element

    for (let i = 1; i < nums.length; i++) {
        // Calculate the maximum sum ending at the current element
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update the maximum sum if the current sum is greater
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

// Example usage:
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSubarraySum = findMaxSubarraySum(nums);
console.log("Maximum Subarray Sum:", maxSubarraySum);
