// Find the equilibrium index in an array

function findEquilibriumIndex(arr) {
    const n = arr.length;
    let leftSum = 0;
    let rightSum = 0;

    // Calculate the sum of all elements in the array
    for (let i = 0; i < n; i++) {
        rightSum += arr[i];
    }

    // Traverse the array and find the equilibrium index
    for (let i = 0; i < n; i++) {
        // Update rightSum by subtracting the current element
        rightSum -= arr[i];

        // Check if the left and right sums are equal
        if (leftSum === rightSum) {
            return i; // Found equilibrium index
        }

        // Update leftSum by adding the current element
        leftSum += arr[i];
    }

    return -1; // No equilibrium index found
}

// Example usage:
const arr = [-7, 1, 5, 2, -4, 3, 0];
const equilibriumIndex = findEquilibriumIndex(arr);
console.log("Equilibrium Index:", equilibriumIndex);
