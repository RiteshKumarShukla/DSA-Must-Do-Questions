// Given an array of integers, find the product of all elements except the current one.

function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n);

    // Calculate the product of all elements before the current element
    let leftProduct = 1;
    for (let i = 0; i < n; i++) {
        result[i] = leftProduct;
        leftProduct *= nums[i];
    }

    // Calculate the product of all elements after the current element
    let rightProduct = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] *= rightProduct;
        rightProduct *= nums[i];
    }

    return result;
}

// Example usage:
const nums = [1, 2, 3, 4, 5];
const productArray = productExceptSelf(nums);
console.log("Product of all elements except the current one:", productArray);
