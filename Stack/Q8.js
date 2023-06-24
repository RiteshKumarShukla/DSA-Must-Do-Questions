// Implement a stack using a linked list.      


function Node(value) {
    return {
        value: value,
        next: null,
    };
}

function createStack() {
    const stack = {
        top: null,
        size: 0,
    };

    function push(value) {
        const newNode = Node(value);
        newNode.next = stack.top;
        stack.top = newNode;
        stack.size++;
    }

    function pop() {
        if (isEmpty()) {
            return null;
        }

        const poppedValue = stack.top.value;
        stack.top = stack.top.next;
        stack.size--;

        return poppedValue;
    }

    function peek() {
        if (isEmpty()) {
            return null;
        }

        return stack.top.value;
    }

    function isEmpty() {
        return stack.size === 0;
    }

    function getSize() {
        return stack.size;
    }

    return {
        push,
        pop,
        peek,
        isEmpty,
        getSize,
    };
}

// Usage:
const stack = createStack();
stack.push(5);
stack.push(3);
stack.push(7);

console.log(stack.getSize()); // Output: 3
console.log(stack.pop()); // Output: 7
console.log(stack.peek()); // Output: 3
console.log(stack.isEmpty()); // Output: false
