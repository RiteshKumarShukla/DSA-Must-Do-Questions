// Find the first non-repeating character in a string.


function firstNonRepeatingCharacter(str) {
    const charCount = {};

    // Count the occurrences of each character
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    // Find the first non-repeating character
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // No non-repeating character found
}

// Example usage
const inputString = 'aabccdeff';
const firstNonRepeatingChar = firstNonRepeatingCharacter(inputString);
console.log(firstNonRepeatingChar); // Output: "b"
