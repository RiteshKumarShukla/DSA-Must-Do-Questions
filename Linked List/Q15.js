// Find the middle element of a linked list. 

function findMiddleElement(head) {
    let slow = head; // Slow pointer
    let fast = head; // Fast pointer

    while (fast !== null && fast.next !== null) {
        slow = slow.next; // Move slow pointer by one step
        fast = fast.next.next; // Move fast pointer by two steps
    }

    return slow; // Return the middle element
}


// Linked list: 1 -> 2 -> 3 -> 4 -> 5
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

const middleElement = findMiddleElement(head);
console.log(middleElement.data); // Output: 3
