// Rearrange an array in wave form.

function rearrangeInWave(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);

    // Swap adjacent elements to create the wave pattern
    for (let i = 0; i < arr.length - 1; i += 2) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
    }

    return arr;
}

// Example usage:
const arr = [3, 1, 4, 6, 2, 5];
const rearrangedArr = rearrangeInWave(arr);
console.log(rearrangedArr);
