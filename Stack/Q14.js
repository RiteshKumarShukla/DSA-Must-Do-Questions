// Implement a stack that supports push, pop, and findMiddle operations in O(1) time.    

function Node(value) {
    return {
        value,
        prev: null,
        next: null
    };
}

function Stack() {
    const stack = {
        top: null,
        middle: null,
        size: 0,
        push,
        pop,
        findMiddle
    };

    function push(value) {
        const newNode = Node(value);

        if (stack.size === 0) {
            stack.top = newNode;
            stack.middle = newNode;
        } else {
            newNode.prev = stack.top;
            stack.top.next = newNode;
            stack.top = newNode;

            if (stack.size % 2 === 0) {
                stack.middle = stack.middle.next;
            }
        }

        stack.size++;
    }

    function pop() {
        if (stack.size === 0) {
            return null;
        }

        const poppedNode = stack.top;

        if (stack.size === 1) {
            stack.top = null;
            stack.middle = null;
        } else {
            stack.top = stack.top.prev;
            stack.top.next = null;

            if (stack.size % 2 === 1) {
                stack.middle = stack.middle.prev;
            }
        }

        stack.size--;

        return poppedNode.value;
    }

    function findMiddle() {
        if (stack.size === 0) {
            return null;
        }

        return stack.middle.value;
    }

    return stack;
}
