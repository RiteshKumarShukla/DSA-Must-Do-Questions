// Evaluate a postfix expression using a stack. 

function evaluatePostfixExpression(expression) {
    const stack = [];

    for (let i = 0; i < expression.length; i++) {
        const token = expression[i];

        // If the token is a number, push it to the stack
        if (!isNaN(token)) {
            stack.push(parseFloat(token));
        }
        // If the token is an operator, perform the corresponding operation on the top two elements of the stack
        else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();

            let result;
            switch (token) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
                default:
                    throw new Error('Invalid operator');
            }

            stack.push(result);
        }
    }

    // The final result will be the only element remaining in the stack
    if (stack.length !== 1) {
        throw new Error('Invalid expression');
    }

    return stack.pop();
}

// Test case:
console.log(evaluatePostfixExpression('52+83-*4/')); // Output: 4
