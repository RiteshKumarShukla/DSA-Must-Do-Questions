// Detect if a linked list has a cycle and find the starting point of the cycle.

function detectCycle(head) {
    let slow = head;
    let fast = head;

    // Move the slow and fast pointers until they meet
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        // If they meet, it indicates the presence of a cycle
        if (slow === fast) {
            // Reset slow to the head and move slow and fast pointers at the same pace
            slow = head;
            while (slow !== fast) {
                slow = slow.next;
                fast = fast.next;
            }
            // Both pointers will meet again at the starting point of the cycle
            return slow;
        }
    }

    // If the fast pointer reaches the end of the list, it means there is no cycle
    return null;
}


// Linked list with a cycle: 1 -> 2 -> 3 -> 4 -> 5 -> 3 (points back to node 3)
const head = {
    data: 1,
    next: {
        data: 2,
        next: {
            data: 3,
            next: {
                data: 4,
                next: {
                    data: 5,
                    next: null,
                },
            },
        },
    },
};

// Create the cycle by pointing the last node to the node with data 3
head.next.next.next.next.next = head.next.next;

const cycleStart = detectCycle(head);
if (cycleStart !== null) {
    console.log("Cycle detected. Starting point of the cycle:", cycleStart.data);
} else {
    console.log("No cycle detected.");
}


//   Cycle detected. Starting point of the cycle: 3
