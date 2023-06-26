// Implement a stack using two queues.   

function Stack() {
    const queue1 = [];
    const queue2 = [];

    this.push = function (value) {
        queue1.push(value);
    };

    this.pop = function () {
        if (queue1.length === 0) {
            return null; // Stack is empty
        }

        while (queue1.length > 1) {
            queue2.push(queue1.shift());
        }

        const poppedElement = queue1.shift();

        // Swap the names of queue1 and queue2
        const temp = queue1;
        queue1 = queue2;
        queue2 = temp;

        return poppedElement;
    };

    this.top = function () {
        if (queue1.length === 0) {
            return null; // Stack is empty
        }

        while (queue1.length > 1) {
            queue2.push(queue1.shift());
        }

        const topElement = queue1[0];

        // Enqueue the top element into queue2
        queue2.push(queue1.shift());

        // Swap the names of queue1 and queue2
        const temp = queue1;
        queue1 = queue2;
        queue2 = temp;

        return topElement;
    };
}

// Example usage
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.top()); // Output: 3
console.log(stack.pop()); // Output: 3
console.log(stack.top()); // Output: 2
console.log(stack.pop()); // Output: 2
console.log(stack.pop()); // Output: 1
console.log(stack.pop()); // Output: null (stack is empty)
