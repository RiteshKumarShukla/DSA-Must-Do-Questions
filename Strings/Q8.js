// Implement strstr() (substring search). 

function strstr(haystack, needle) {
    if (needle === '') {
        return 0;
    }

    const haystackLength = haystack.length;
    const needleLength = needle.length;

    if (needleLength > haystackLength) {
        return -1;
    }

    for (let i = 0; i <= haystackLength - needleLength; i++) {
        let j;
        for (j = 0; j < needleLength; j++) {
            if (haystack[i + j] !== needle[j]) {
                break;
            }
        }
        if (j === needleLength) {
            return i;
        }
    }

    return -1;
}

// Example usage
const haystack = "Hello, World!";
const needle = "World";
const result = strstr(haystack, needle);
console.log(result); // Output: 7
