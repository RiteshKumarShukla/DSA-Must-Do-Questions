// Compress a string by replacing repeated characters with their count. 

function compressString(str) {
    let compressed = '';
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + count;
            count = 1;
        }
    }

    return compressed.length < str.length ? compressed : str;
}

// Example usage
const inputString = 'aabbbccccdd';
const compressedString = compressString(inputString);
console.log(compressedString); // Output: "a2b3c4d2"
