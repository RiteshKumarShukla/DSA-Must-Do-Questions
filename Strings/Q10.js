//Implement regular expression matching.

function isMatch(str, pattern) {
    if (pattern === "") {
        return str === "";
    }

    const firstMatch = str !== "" && (pattern[0] === str[0] || pattern[0] === ".");

    if (pattern.length >= 2 && pattern[1] === "*") {
        return (
            (isMatch(str, pattern.substring(2))) ||
            (firstMatch && isMatch(str.substring(1), pattern))
        );
    } else {
        return firstMatch && isMatch(str.substring(1), pattern.substring(1));
    }
}

// Example usage
const inputString = "aab";
const inputPattern = "c*a*b";
const result = isMatch(inputString, inputPattern);
console.log(result); // Output: true
