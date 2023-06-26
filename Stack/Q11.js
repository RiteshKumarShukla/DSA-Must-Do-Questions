// Implement a stack using an array.      

function Stack() {
    const stack = [];

    // Push an element onto the stack
    function push(element) {
        stack.push(element);
    }

    // Remove and return the top element from the stack
    function pop() {
        if (!isEmpty()) {
            return stack.pop();
        } else {
            console.log("Stack is empty.");
        }
    }

    // Return the top element of the stack without removing it
    function peek() {
        if (!isEmpty()) {
            return stack[stack.length - 1];
        } else {
            console.log("Stack is empty.");
        }
    }

    // Check if the stack is empty
    function isEmpty() {
        return stack.length === 0;
    }

    // Return the size of the stack
    function size() {
        return stack.length;
    }

    // Print the elements of the stack
    function print() {
        console.log(stack);
    }

    return {
        push,
        pop,
        peek,
        isEmpty,
        size,
        print,
    };
}

// Example usage:
const stack = Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // Output: [10, 20, 30]

console.log(stack.peek()); // Output: 30

stack.pop();
stack.print(); // Output: [10, 20]
