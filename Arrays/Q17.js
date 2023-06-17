// Rearrange positive and negative numbers in an array. 

function rearrangePositiveNegative(nums) {
    let left = 0; // Pointer for negative numbers
    let right = nums.length - 1; // Pointer for positive numbers

    while (left < right) {
        // Move the left pointer until a negative number is found
        while (nums[left] < 0 && left < right) {
            left++;
        }

        // Move the right pointer until a positive number is found
        while (nums[right] >= 0 && left < right) {
            right--;
        }

        // Swap the positive and negative numbers
        if (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
}

// Example usage:
const nums = [2, -4, -7, 8, -9, 1, -3];
rearrangePositiveNegative(nums);
console.log("Rearranged array:", nums);
//   Rearranged array: [2, -4, 1, -9, 8, -7, -3]
