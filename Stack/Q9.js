// Check if a given expression is balanced using a stack.  

function isBalanced(expression) {
    const stack = [];

    for (let i = 0; i < expression.length; i++) {
        const symbol = expression[i];

        if (isOpenSymbol(symbol)) {
            stack.push(symbol);
        } else if (isCloseSymbol(symbol)) {
            if (stack.length === 0 || !isMatchingPair(stack.pop(), symbol)) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

function isOpenSymbol(symbol) {
    return symbol === '(' || symbol === '[' || symbol === '{';
}

function isCloseSymbol(symbol) {
    return symbol === ')' || symbol === ']' || symbol === '}';
}

function isMatchingPair(openSymbol, closeSymbol) {
    return (
        (openSymbol === '(' && closeSymbol === ')') ||
        (openSymbol === '[' && closeSymbol === ']') ||
        (openSymbol === '{' && closeSymbol === '}')
    );
}

// Test cases:
console.log(isBalanced('([])')); // Output: true
console.log(isBalanced('[{()}]')); // Output: true
console.log(isBalanced('({[}])')); // Output: false
console.log(isBalanced(')(')); // Output: false
