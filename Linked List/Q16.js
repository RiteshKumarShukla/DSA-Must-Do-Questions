// Remove the Nth node from the end of a linked list. 

function removeNthFromEnd(head, n) {
    // Create a dummy node as the previous node of the head
    const dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy; // Slow pointer
    let fast = dummy; // Fast pointer

    // Move the fast pointer n steps ahead
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }

    // Move both pointers until the fast pointer reaches the end of the list
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // Remove the Nth node by updating the pointers
    slow.next = slow.next.next;

    // Return the updated head
    return dummy.next;
}


// Linked list: 1 -> 2 -> 3 -> 4 -> 5
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

const n = 2; // Remove the second node from the end

const updatedHead = removeNthFromEnd(head, n);

// Print the updated linked list
let current = updatedHead;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}
