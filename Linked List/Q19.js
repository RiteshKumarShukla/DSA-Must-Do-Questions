// Split a linked list into two halves.

function splitLinkedList(head) {
    if (!head || !head.next) {
        return [head, null]; // Return [original list, null] for an empty list or a list with one node
    }

    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null; // Disconnect the second half of the linked list

    return [head, slow];
}


// Linked list: 1 -> 2 -> 3 -> 4 -> 5 -> null
const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null,
                },
            },
        },
    },
};

const [firstHalf, secondHalf] = splitLinkedList(head);
console.log("First half:");
printLinkedList(firstHalf);
console.log("Second half:");
printLinkedList(secondHalf);

// Helper function to print the linked list
function printLinkedList(head) {
    let current = head;
    while (current) {
        process.stdout.write(`${current.val} -> `);
        current = current.next;
    }
    console.log("null");
}
