// Check if two strings are rotations of each other. 

function areRotations(str1, str2) {
    // Check if the lengths of the strings are the same
    if (str1.length !== str2.length) {
        return false;
    }

    // Concatenate str1 with itself
    const concatenated = str1 + str1;

    // Check if str2 is a substring of the concatenated string
    if (concatenated.includes(str2)) {
        return true;
    } else {
        return false;
    }
}

// Example usage
const string1 = "rotation";
const string2 = "tionrota";
const result = areRotations(string1, string2);
console.log(result); // Output: true
