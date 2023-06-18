// Convert a string to an integer (atoi). 

function atoi(str) {
    // Remove leading and trailing whitespaces
    str = str.trim();

    // Check if the string is empty after trimming
    if (str.length === 0) {
        return 0;
    }

    // Extract the sign (+/-) if present
    let sign = 1;
    if (str[0] === '-' || str[0] === '+') {
        sign = str[0] === '-' ? -1 : 1;
        str = str.slice(1); // Remove the sign from the string
    }

    // Iterate over the remaining characters
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);

        // Check if the character is a digit (0-9)
        if (charCode >= 48 && charCode <= 57) {
            // Convert the character to its numeric value and add it to the result
            result = result * 10 + (charCode - 48);
        } else {
            // If a non-digit character is encountered, break the loop
            break;
        }
    }

    // Apply the sign to the result and handle overflow
    result = sign * result;
    result = Math.max(Math.pow(-2, 31), Math.min(Math.pow(2, 31) - 1, result));

    return result;
}

// Example usage
const input = "42";
const number = atoi(input);
console.log(number); // Output: 42
