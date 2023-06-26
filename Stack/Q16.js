// Sort a stack using another stack.   

function sortStack(stack) {
    const tempStack = [];

    while (stack.length > 0) {
        const temp = stack.pop();

        while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
            stack.push(tempStack.pop());
        }

        tempStack.push(temp);
    }

    // Copy elements from tempStack back to stack
    while (tempStack.length > 0) {
        stack.push(tempStack.pop());
    }

    return stack;
}

// Example usage
const stack = [5, 2, 8, 1, 3];
console.log("Original Stack:", stack);
console.log("Sorted Stack:", sortStack(stack));
