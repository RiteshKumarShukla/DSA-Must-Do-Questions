// Reverse a linked list in groups of a given size.  

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedListInGroups(head, groupSize) {
    if (!head || !head.next || groupSize <= 1) {
        return head;
    }

    let current = head;
    let previous = null;
    let next = null;
    let count = 0;

    // Reverse the first group of nodes
    while (current && count < groupSize) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
        count++;
    }

    // Recursively reverse the remaining groups
    if (next) {
        head.next = reverseLinkedListInGroups(next, groupSize);
    }

    return previous;
}

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8
const head = new Node(1);
let current = head;
for (let i = 2; i <= 8; i++) {
    current.next = new Node(i);
    current = current.next;
}

// Reverse the linked list in groups of size 3
const groupSize = 3;
const reversedHead = reverseLinkedListInGroups(head, groupSize);

// Print the reversed linked list
let result = "";
let node = reversedHead;
while (node) {
    result += node.value + " -> ";
    node = node.next;
}
result += "null";
console.log(result);
