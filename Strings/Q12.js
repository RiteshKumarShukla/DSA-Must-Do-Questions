// Check if a string is a palindrome.

function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Example usage
const input = "A man, a plan, a canal: Panama";
const result = isPalindrome(input);
console.log(result); // Output: true
