// Count the number of pairs in an array whose sum is equal to a given target value.

function countPairsWithSum(arr, target) {
    const pairCounts = {};
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];

        // Check if the complement exists in the pairCounts object
        if (pairCounts[complement]) {
            count += pairCounts[complement];
        }

        // Increment the count for the current element
        if (pairCounts[arr[i]]) {
            pairCounts[arr[i]]++;
        } else {
            pairCounts[arr[i]] = 1;
        }
    }

    return count;
}

// Example usage:
const arr = [2, 4, 3, 2, 1, 6, 7, 9];
const target = 5;
const pairCount = countPairsWithSum(arr, target);
console.log("Number of pairs:", pairCount);
