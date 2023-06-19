// Swap nodes in pairs in a linked list.

function Node(value) {
    this.value = value;
    this.next = null;
}

function swapPairs(head) {
    if (!head || !head.next) {
        // Return the head if the list is empty or has only one node
        return head;
    }

    // Create a dummy node to handle edge cases
    const dummy = new Node(0);
    dummy.next = head;

    let prev = dummy;
    let current = head;

    while (current && current.next) {
        // Store the nodes to be swapped
        const firstNode = current;
        const secondNode = current.next;

        // Swap the nodes by updating the pointers
        prev.next = secondNode;
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;

        // Update the previous and current pointers for the next iteration
        prev = firstNode;
        current = firstNode.next;
    }

    return dummy.next;
}

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

// Swap nodes in pairs
const swappedList = swapPairs(head);

// Print the swapped linked list
let current = swappedList;
while (current) {
    console.log(current.value);
    current = current.next;
}
