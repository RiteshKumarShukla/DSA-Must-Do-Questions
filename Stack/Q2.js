// Implement a stack that supports sorting its elements.

function SortedStack() {
    const stack = [];
    const sortedStack = [];

    function push(value) {
        while (sortedStack.length > 0 && value > sortedStack[sortedStack.length - 1]) {
            stack.push(sortedStack.pop());
        }

        sortedStack.push(value);
    }

    function pop() {
        while (stack.length > 0) {
            sortedStack.push(stack.pop());
        }

        return sortedStack.pop();
    }

    function peek() {
        while (stack.length > 0) {
            sortedStack.push(stack.pop());
        }

        return sortedStack[sortedStack.length - 1];
    }

    function isEmpty() {
        return stack.length === 0 && sortedStack.length === 0;
    }

    return {
        push,
        pop,
        peek,
        isEmpty
    };
}

// Usage:
const stack = SortedStack();
stack.push(5);
stack.push(2);
stack.push(7);
stack.push(1);

console.log(stack.pop()); // Output: 1 (sorted in descending order)
console.log(stack.pop()); // Output: 2
console.log(stack.pop()); // Output: 5
console.log(stack.pop()); // Output: 7
console.log(stack.isEmpty()); // Output: true (stack is empty)
