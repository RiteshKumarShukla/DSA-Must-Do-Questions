// Remove duplicate characters from a string.

function removeDuplicates(str) {
    let result = '';
    let charMap = {};

    for (let char of str) {
        if (!charMap[char]) {
            charMap[char] = true;
            result += char;
        }
    }

    return result;
}

// Example usage
const inputString = 'Hello, World!';
const stringWithoutDuplicates = removeDuplicates(inputString);
console.log(stringWithoutDuplicates); // Output: "Helo, Wrd!"
