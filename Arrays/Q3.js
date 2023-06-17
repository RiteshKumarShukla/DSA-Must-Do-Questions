// Rearrange an array in alternating positive and negative numbers.

function rearrangeArray(arr) {
    let positiveIndex = 0;
    let negativeIndex = 1;
    const n = arr.length;

    // Find the first positive element's index
    while (positiveIndex < n && arr[positiveIndex] >= 0) {
        positiveIndex += 2;
    }

    // Find the first negative element's index
    while (negativeIndex < n && arr[negativeIndex] < 0) {
        negativeIndex += 2;
    }

    // Rearrange the array by swapping positive and negative elements
    while (positiveIndex < n && negativeIndex < n) {
        [arr[positiveIndex], arr[negativeIndex]] = [arr[negativeIndex], arr[positiveIndex]];

        // Find the next positive element's index
        while (positiveIndex < n && arr[positiveIndex] >= 0) {
            positiveIndex += 2;
        }

        // Find the next negative element's index
        while (negativeIndex < n && arr[negativeIndex] < 0) {
            negativeIndex += 2;
        }
    }

    return arr;
}

// Example usage:
const arr = [-1, 2, -3, 4, -5, 6, -7, 8];
const rearranged = rearrangeArray(arr);
console.log("Rearranged Array:", rearranged);
