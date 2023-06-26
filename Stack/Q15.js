// Check if a string is a palindrome using a stack.    

function isPalindrome(str) {
    const stack = [];

    // Push each character onto the stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    let reversedStr = '';

    // Pop each character from the stack and append it to the reversed string
    while (stack.length > 0) {
        reversedStr += stack.pop();
    }

    // Compare the original string with the reversed string
    return str === reversedStr;
}

// Example usage
console.log(isPalindrome("hello"));    // false
console.log(isPalindrome("madam"));    // true
console.log(isPalindrome("racecar"));  // true
