// Find the nth node from the end of a linked list.

function Node(value) {
    this.value = value;
    this.next = null;
}

function findNthFromEnd(head, n) {
    if (!head || n <= 0) {
        return null;
    }

    let slow = head;
    let fast = head;

    // Move the fast pointer n nodes ahead
    for (let i = 0; i < n; i++) {
        if (!fast) {
            // Return null if the list length is less than n
            return null;
        }
        fast = fast.next;
    }

    // Move both pointers until the fast pointer reaches the end
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    // At this point, the slow pointer is at the nth node from the end
    return slow;
}

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

const n = 2; // Find the 2nd node from the end

// Find the nth node from the end
const nthNodeFromEnd = findNthFromEnd(head, n);

if (nthNodeFromEnd) {
    console.log(`The ${n}th node from the end is: ${nthNodeFromEnd.value}`);
} else {
    console.log(`There is no ${n}th node from the end in the list.`);
}
