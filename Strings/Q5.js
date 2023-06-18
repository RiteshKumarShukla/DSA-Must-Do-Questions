// Check if a string is a valid palindrome considering only alphanumeric characters.

function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        const startChar = str[start].toLowerCase();
        const endChar = str[end].toLowerCase();

        // Skip non-alphanumeric characters
        if (!isAlphanumeric(startChar)) {
            start++;
            continue;
        }
        if (!isAlphanumeric(endChar)) {
            end--;
            continue;
        }

        // If the characters at the pointers are not equal, it's not a palindrome
        if (startChar !== endChar) {
            return false;
        }

        // Move the pointers towards each other
        start++;
        end--;
    }

    // If the loop completes, it is a valid palindrome
    return true;
}

function isAlphanumeric(char) {
    const code = char.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) || // 0-9
        (code >= 97 && code <= 122) // a-z
    );
}

// Example usage
const input = "A man, a plan, a canal: Panama";
const result = isPalindrome(input);
console.log(result); // Output: true
