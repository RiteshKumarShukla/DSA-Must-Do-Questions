// Find the longest substring without repeating characters. 

function findLongestSubstring(str) {
    let maxLength = 0;
    let start = 0;
    let charMap = {};

    for (let end = 0; end < str.length; end++) {
        const currentChar = str[end];

        // If the character is already in the map and its index is after the start,
        // move the start pointer to the next index of the repeated character.
        if (charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1;
        }

        // Update the character's index in the map
        charMap[currentChar] = end;

        // Update the maximum length if a longer substring is found
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage
const input = "abcabcbb";
const longestLength = findLongestSubstring(input);
console.log(longestLength); // Output: 3
