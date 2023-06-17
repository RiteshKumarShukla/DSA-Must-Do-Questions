// Find the duplicate number in an array of integers from 1 to N. 

function findDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            return Math.abs(nums[i]);
        }
        nums[index] = -nums[index];
    }

    // If no duplicate is found
    return -1;
}

// Example usage:
const nums = [1, 3, 4, 2, 2];
const duplicate = findDuplicate(nums);
console.log("Duplicate Number:", duplicate);
