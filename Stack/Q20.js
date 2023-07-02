// Check if a string is balanced by checking its parentheses using a stack.   

function isBalanced(string) {
    const stack = [];

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0) {
                return false; // Unbalanced: closing parenthesis without a matching opening parenthesis
            }

            const top = stack.pop();

            if (
                (char === ')' && top !== '(') ||
                (char === ']' && top !== '[') ||
                (char === '}' && top !== '{')
            ) {
                return false; // Unbalanced: mismatched opening and closing parentheses
            }
        }
    }

    return stack.length === 0; // Balanced if the stack is empty
}
