//Check if a given expression is balanced using a stack.     


function isBalanced(expression) {
    const stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];

    for (let i = 0; i < expression.length; i++) {
        const currentChar = expression[i];

        if (openingBrackets.includes(currentChar)) {
            stack.push(currentChar);
        } else if (closingBrackets.includes(currentChar)) {
            const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(currentChar)];

            if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Example usage:
console.log(isBalanced('({})')); // Output: true
console.log(isBalanced('[()]{[()]}')); // Output: true
console.log(isBalanced('{[}]')); // Output: false
console.log(isBalanced('([]')); // Output: false
