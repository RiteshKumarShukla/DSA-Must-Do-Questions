// Find the missing number in an array of integers from 1 to N.

function findMissingNumber(nums) {
    const n = nums.length + 1; // Total number of elements, including the missing one
    const expectedSum = (n * (n + 1)) / 2; // Sum of the sequence from 1 to N
    const actualSum = nums.reduce((sum, num) => sum + num, 0); // Sum of the given array

    return expectedSum - actualSum; // The difference is the missing number
}

// Example usage:
const nums = [1, 2, 4, 6, 3, 7, 8, 5];
const missingNumber = findMissingNumber(nums);
console.log("Missing Number:", missingNumber);
