// Detect and remove a loop in a linked list.

function Node(value) {
    this.value = value;
    this.next = null;
}

function detectAndRemoveLoop(head) {
    let slow = head;
    let fast = head;

    // Move the slow and fast pointers until they meet
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        // If the pointers meet, there is a loop in the list
        if (slow === fast) {
            break;
        }
    }

    // If the pointers did not meet, there is no loop in the list
    if (slow !== fast) {
        return false;
    }

    // Reset the slow pointer to the head and move both pointers at the same pace
    slow = head;
    while (slow.next !== fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    // Set the next pointer of the last node in the loop to null, effectively removing the loop
    fast.next = null;

    return true;
}

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 2 (loop)
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = head.next; // Creating a loop by connecting the last node to the second node

// Detect and remove the loop
const hasLoop = detectAndRemoveLoop(head);

if (hasLoop) {
    console.log('Loop detected and removed.');
} else {
    console.log('No loop found in the list.');
}
