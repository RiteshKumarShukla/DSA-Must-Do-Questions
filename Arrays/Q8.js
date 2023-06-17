// Find the minimum and maximum element in an array with a minimum number of comparisons.

function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    // Compare elements in pairs to find the minimum and maximum
    for (let i = 1; i < arr.length; i += 2) {
        if (arr[i] > arr[i + 1]) {
            if (arr[i] > max) max = arr[i];
            if (arr[i + 1] < min) min = arr[i + 1];
        } else {
            if (arr[i + 1] > max) max = arr[i + 1];
            if (arr[i] < min) min = arr[i];
        }
    }

    // Handle the case when the array length is odd
    if (arr.length % 2 !== 0) {
        const lastElement = arr[arr.length - 1];
        if (lastElement > max) max = lastElement;
        if (lastElement < min) min = lastElement;
    }

    return { min, max };
}

// Example usage:
const arr = [7, 2, 9, 5, 1, 8, 6];
const { min, max } = findMinMax(arr);
console.log("Minimum:", min);
console.log("Maximum:", max);
