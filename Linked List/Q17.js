// Given a linked list, remove duplicates from it.

function removeDuplicates(head) {
    if (!head || !head.next) {
        return head; // If the list is empty or has only one node, return the head
    }

    let current = head;

    while (current) {
        let runner = current;

        while (runner.next) {
            if (runner.next.val === current.val) {
                // Duplicate found, remove the node
                runner.next = runner.next.next;
            } else {
                // Move to the next node
                runner = runner.next;
            }
        }

        current = current.next;
    }

    return head;
}


// Linked list: 1 -> 2 -> 2 -> 3 -> 4 -> 4 -> 5
const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 2,
            next: {
                val: 3,
                next: {
                    val: 4,
                    next: {
                        val: 4,
                        next: {
                            val: 5,
                            next: null,
                        },
                    },
                },
            },
        },
    },
};

const updatedHead = removeDuplicates(head);

// Print the updated linked list
let current = updatedHead;
while (current) {
    console.log(current.val);
    current = current.next;
}
