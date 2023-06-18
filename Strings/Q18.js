// Check if a string is a valid parentheses expression.

function isValidParentheses(str) {
    const stack = [];

    // Helper function to check if two parentheses match
    function isMatchingPair(open, close) {
        return (
            (open === '(' && close === ')') ||
            (open === '[' && close === ']') ||
            (open === '{' && close === '}')
        );
    }

    for (let char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char); // Push opening parentheses to the stack
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0 || !isMatchingPair(stack.pop(), char)) {
                return false; // Unmatched closing parentheses or no opening parentheses in the stack
            }
        }
    }

    return stack.length === 0; // All opening parentheses should be matched and popped from the stack
}

// Example usage
const inputString = '({[]})';
const isValid = isValidParentheses(inputString);
console.log(isValid); // Output: true
