// Reverse a stack using recursion.

function reverseStack(stack) {
    if (stack.length === 0) {
        return stack;
    }

    const top = stack.pop();
    reverseStack(stack);
    insertAtBottom(stack, top);

    return stack;
}

function insertAtBottom(stack, item) {
    if (stack.length === 0) {
        stack.push(item);
        return;
    }

    const top = stack.pop();
    insertAtBottom(stack, item);
    stack.push(top);
}
