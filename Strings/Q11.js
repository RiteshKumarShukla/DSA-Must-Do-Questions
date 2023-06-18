// Reverse a string. 

function reverseString(str) {
    // Convert the string to an array of characters
    const chars = str.split('');

    // Reverse the array using the reverse() method
    const reversedChars = chars.reverse();

    // Join the reversed array back into a string
    const reversedStr = reversedChars.join('');

    return reversedStr;
}

// Example usage
const input = "Hello, World!";
const reversed = reverseString(input);
console.log(reversed); // Output: "!dlroW ,olleH"
