// Rearrange an array such that arr[i] becomes arr[arr[i]] with O(1) extra space.

function rearrangeArray(arr) {
    const n = arr.length;

    // Encode each element as (newValue * n + oldValue)
    for (let i = 0; i < n; i++) {
        arr[i] += (arr[arr[i]] % n) * n;
    }

    // Decode each element to its new value
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(arr[i] / n);
    }

    return arr;
}

// Example usage:
const arr = [4, 0, 2, 1, 3];
const rearrangedArr = rearrangeArray(arr);
console.log("Rearranged array:", rearrangedArr);
