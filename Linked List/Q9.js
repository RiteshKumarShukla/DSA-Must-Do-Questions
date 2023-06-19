// Check if a linked list is cyclic or acyclic.

function isCyclic(head) {
    if (!head || !head.next) {
        return false; // An empty list or a list with only one node is acyclic
    }

    let slow = head; // Tortoise pointer
    let fast = head; // Hare pointer

    while (fast && fast.next) {
        slow = slow.next; // Move the tortoise one step at a time
        fast = fast.next.next; // Move the hare two steps at a time

        if (slow === fast) {
            return true; // If the tortoise and hare meet, the list is cyclic
        }
    }

    return false; // If the hare reaches the end of the list, the list is acyclic
}
