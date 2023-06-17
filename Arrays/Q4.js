// Find the maximum difference between two elements in an array, where the smaller element appears before the larger element.

function findMaxDifference(arr) {
    let minElement = arr[0];
    let maxDifference = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > minElement) {
            let difference = arr[i] - minElement;
            if (difference > maxDifference) {
                maxDifference = difference;
            }
        } else {
            minElement = arr[i];
        }
    }

    return maxDifference;
}

// Example usage:
const arr = [7, 1, 5, 3, 6, 4];
const maxDifference = findMaxDifference(arr);
console.log("Maximum Difference:", maxDifference);
