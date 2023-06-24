// Check if parentheses in a string are balanced using a stack. 

function areParenthesesBalanced(str) {
    const stack = [];

    // Helper function to check if two parentheses are a matching pair
    function isMatchingPair(opening, closing) {
        return (
            (opening === '(' && closing === ')') ||
            (opening === '[' && closing === ']') ||
            (opening === '{' && closing === '}')
        );
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // If the current character is an opening parentheses, push it to the stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        }
        // If the current character is a closing parentheses
        else if (char === ')' || char === ']' || char === '}') {
            // If the stack is empty or the current closing parentheses does not match the top of the stack, return false
            if (stack.length === 0 || !isMatchingPair(stack[stack.length - 1], char)) {
                return false;
            }
            // If the current closing parentheses matches the top of the stack, pop it from the stack
            stack.pop();
        }
    }

    // If the stack is empty after processing all the characters, the parentheses are balanced
    return stack.length === 0;
}

// Test cases:
console.log(areParenthesesBalanced('')); // Output: true (empty string)
console.log(areParenthesesBalanced('()')); // Output: true
console.log(areParenthesesBalanced('({})')); // Output: true
console.log(areParenthesesBalanced('[()]')); // Output: true
console.log(areParenthesesBalanced('({[}])')); // Output: false
console.log(areParenthesesBalanced('(){}[')); // Output: false
