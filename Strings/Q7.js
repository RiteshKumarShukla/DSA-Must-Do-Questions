// Find the first non-repeating character in a string.

function findFirstNonRepeatingChar(str) {
    const charCount = {};

    // Count the frequency of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character found, return null or any default value as per your requirement
    return null;
}

// Example usage
const input = "aabccdef";
const result = findFirstNonRepeatingChar(input);
console.log(result); // Output: "b"
