// Print all permutations of a string.

function printPermutations(str) {
    const permutations = [];

    // Convert the string to an array of characters for easier manipulation
    const chars = str.split('');

    // Helper function to generate permutations recursively
    function generatePermutations(startIndex) {
        if (startIndex === chars.length - 1) {
            // Base case: Reached the last character, so add the current permutation
            permutations.push(chars.join(''));
            return;
        }

        for (let i = startIndex; i < chars.length; i++) {
            // Swap characters to generate different permutations
            [chars[startIndex], chars[i]] = [chars[i], chars[startIndex]];

            // Recursive call to generate permutations for the remaining characters
            generatePermutations(startIndex + 1);

            // Restore the original order of characters (backtrack)
            [chars[startIndex], chars[i]] = [chars[i], chars[startIndex]];
        }
    }

    // Start the recursive generation from the first character
    generatePermutations(0);

    // Print the permutations
    for (const permutation of permutations) {
        console.log(permutation);
    }
}

// Example usage
const input = "abc";
printPermutations(input);
