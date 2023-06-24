// Design a stack that supports getMin operation in O(1) time.        

function MinStack() {
    const stack = [];
    const minStack = [];

    function push(value) {
        stack.push(value);

        if (minStack.length === 0 || value <= minStack[minStack.length - 1]) {
            minStack.push(value);
        }
    }

    function pop() {
        if (stack.length === 0) {
            return null;
        }

        const poppedValue = stack.pop();

        if (poppedValue === minStack[minStack.length - 1]) {
            minStack.pop();
        }

        return poppedValue;
    }

    function top() {
        if (stack.length === 0) {
            return null;
        }

        return stack[stack.length - 1];
    }

    function getMin() {
        if (minStack.length === 0) {
            return null;
        }

        return minStack[minStack.length - 1];
    }

    return {
        push,
        pop,
        top,
        getMin
    };
}

// Usage:
const stack = MinStack();
stack.push(5);
stack.push(2);
stack.push(7);
stack.push(1);

console.log(stack.getMin()); // Output: 1
console.log(stack.pop()); // Output: 1
console.log(stack.getMin()); // Output: 2
console.log(stack.top()); // Output: 7
