// Find the majority element in an array. 

function findMajorityElement(nums) {
    let count = 0;
    let candidate = null;

    // Find the potential majority element
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }

        if (nums[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Verify if the potential candidate is the majority element
    count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === candidate) {
            count++;
        }
    }

    if (count > nums.length / 2) {
        return candidate;
    } else {
        return null;
    }
}

// Example usage:
const nums = [2, 4, 3, 2, 2, 2, 5, 2, 2];
const majorityElement = findMajorityElement(nums);
console.log("Majority Element:", majorityElement);
