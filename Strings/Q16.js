// Find the longest palindromic substring in a string.

function longestPalindromicSubstring(str) {
    if (str.length < 2) {
        return str;
    }

    let start = 0;
    let maxLength = 1;

    // Helper function to expand around center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            const currentLength = right - left + 1;
            if (currentLength > maxLength) {
                maxLength = currentLength;
                start = left;
            }
            left--;
            right++;
        }
    }

    // Iterate through each character as potential center
    for (let i = 0; i < str.length; i++) {
        expandAroundCenter(i, i); // For odd-length palindromes
        expandAroundCenter(i, i + 1); // For even-length palindromes
    }

    return str.substring(start, start + maxLength);
}

// Example usage
const inputString = 'babad';
const longestPalindrome = longestPalindromicSubstring(inputString);
console.log(longestPalindrome); // Output: "bab"
