// Convert an infix expression to postfix using a stack.     

function isOperator(token) {
    return token === '+' || token === '-' || token === '*' || token === '/';
}

function getPrecedence(token) {
    if (token === '+' || token === '-') {
        return 1;
    } else if (token === '*' || token === '/') {
        return 2;
    }
    return 0;
}

function infixToPostfix(expression) {
    const stack = [];
    let postfix = '';

    for (let i = 0; i < expression.length; i++) {
        const token = expression[i];

        if (token === ' ') {
            continue;
        }

        if (!isNaN(token)) {
            postfix += token;
        } else if (isOperator(token)) {
            while (
                stack.length > 0 &&
                isOperator(stack[stack.length - 1]) &&
                getPrecedence(token) <= getPrecedence(stack[stack.length - 1])
            ) {
                postfix += stack.pop();
            }
            stack.push(token);
        } else if (token === '(') {
            stack.push(token);
        } else if (token === ')') {
            while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                postfix += stack.pop();
            }
            stack.pop(); // Pop '(' from the stack
        }
    }

    while (stack.length > 0) {
        postfix += stack.pop();
    }

    return postfix;
}

// Test case:
console.log(infixToPostfix('3 + 4 * 2 / (1 - 5)')); // Output: "342*15-/+" 
