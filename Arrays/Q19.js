// Find the peak element in an array.

function findPeakElement(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Check if the middle element is a peak
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    // At the end of the loop, 'left' and 'right' will be equal
    // and will point to the peak element
    return nums[left];
}

// Example usage:
const nums = [1, 2, 3, 1];
const peakElement = findPeakElement(nums);
console.log("Peak element:", peakElement);
