// Remove duplicates from a sorted linked list.

function Node(value) {
    this.value = value;
    this.next = null;
}

function removeDuplicates(head) {
    let current = head;

    // Traverse the linked list
    while (current && current.next) {
        // Check if the current node and the next node have the same value
        if (current.value === current.next.value) {
            // Skip the next node by updating the pointers
            current.next = current.next.next;
        } else {
            // Move to the next node
            current = current.next;
        }
    }

    return head;
}

// Example usage:
// Create a sorted linked list: 1 -> 1 -> 2 -> 3 -> 3
const head = new Node(1);
head.next = new Node(1);
head.next.next = new Node(2);
head.next.next.next = new Node(3);
head.next.next.next.next = new Node(3);

// Remove duplicates from the linked list
const deduplicatedList = removeDuplicates(head);

// Print the deduplicated linked list
let current = deduplicatedList;
while (current) {
    console.log(current.value);
    current = current.next;
}
