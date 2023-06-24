// Design a stack that supports push, pop, and getMin operations in O(1) time.       

function createMinStack() {
    const stack = [];
    const minStack = [];

    function push(value) {
        stack.push(value);

        // Update the minimum stack
        if (minStack.length === 0 || value <= getMin()) {
            minStack.push(value);
        }
    }

    function pop() {
        if (stack.length === 0) {
            throw new Error('Stack is empty');
        }

        const poppedValue = stack.pop();

        // Remove the corresponding minimum value from the minStack
        if (poppedValue === getMin()) {
            minStack.pop();
        }

        return poppedValue;
    }

    function getMin() {
        if (minStack.length === 0) {
            throw new Error('Stack is empty');
        }

        return minStack[minStack.length - 1];
    }

    return {
        push,
        pop,
        getMin
    };
}

// Usage:
const stack = createMinStack();
stack.push(5);
stack.push(2);
stack.push(7);

console.log(stack.getMin()); // Output: 2

stack.pop();
console.log(stack.getMin()); // Output: 2 (minimum is still 2 after popping)

stack.push(1);
console.log(stack.getMin()); // Output: 1 (minimum is updated to 1)
