// Count the occurrences of a substring in a given string.

function countSubstringOccurrences(str, substr) {
    let count = 0;
    let index = str.indexOf(substr);

    while (index !== -1) {
        count++;
        index = str.indexOf(substr, index + 1);
    }

    return count;
}

// Example usage
const inputString = 'Hello, hello, hello!';
const substring = 'hello';
const count = countSubstringOccurrences(inputString, substring);
console.log(count); // Output: 3
