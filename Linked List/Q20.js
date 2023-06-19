// Sort a linked list using a sorting algorithm.

function sortLinkedList(head) {
    if (!head || !head.next) {
        return head; // Return the list as is for an empty list or a list with one node
    }

    // Split the list into two halves
    const [firstHalf, secondHalf] = splitLinkedList(head);

    // Recursively sort the two halves
    const sortedFirstHalf = sortLinkedList(firstHalf);
    const sortedSecondHalf = sortLinkedList(secondHalf);

    // Merge the sorted halves back into a single sorted list
    return merge(sortedFirstHalf, sortedSecondHalf);
}

// Helper function to split a linked list into two halves
function splitLinkedList(head) {
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null; // Disconnect the second half of the linked list

    return [head, slow];
}

// Helper function to merge two sorted linked lists
function merge(list1, list2) {
    const dummy = { next: null };
    let current = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    current.next = list1 || list2; // Append any remaining nodes

    return dummy.next;
}


// Linked list: 5 -> 3 -> 1 -> 4 -> 2 -> null
const head = {
    val: 5,
    next: {
        val: 3,
        next: {
            val: 1,
            next: {
                val: 4,
                next: {
                    val: 2,
                    next: null,
                },
            },
        },
    },
};

const sortedList = sortLinkedList(head);
printLinkedList(sortedList);

// Helper function to print the linked list
function printLinkedList(head) {
    let current = head;
    while (current) {
        process.stdout.write(`${current.val} -> `);
        current = current.next;
    }
    console.log("null");
}
