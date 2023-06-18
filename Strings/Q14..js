// Determine if two strings are anagrams.

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const charCount = {};

    // Count the characters in str1
    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Decrement the character count for str2
    for (let char of str2) {
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}

// Example usage
const input1 = "listen";
const input2 = "silent";
const result = isAnagram(input1, input2);
console.log(result); // Output: true
