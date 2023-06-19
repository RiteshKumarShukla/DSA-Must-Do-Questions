// Merge two sorted linked lists into a single sorted list.

function mergeSortedLists(head1, head2) {
    // Create a dummy node as the starting point of the merged list
    const dummyNode = { data: null, next: null };
    let current = dummyNode;

    // Iterate through the two lists until one of them reaches the end
    while (head1 !== null && head2 !== null) {
        // Compare the values of the nodes
        if (head1.data <= head2.data) {
            // Add the node from the first list to the merged list
            current.next = head1;
            head1 = head1.next;
        } else {
            // Add the node from the second list to the merged list
            current.next = head2;
            head2 = head2.next;
        }
        current = current.next; // Move the current pointer
    }

    // Add the remaining nodes from the first list, if any
    if (head1 !== null) {
        current.next = head1;
    }

    // Add the remaining nodes from the second list, if any
    if (head2 !== null) {
        current.next = head2;
    }

    return dummyNode.next; // Return the merged list starting from the next node of the dummy node
}


// First sorted linked list: 1 -> 3 -> 5
const head1 = {
    data: 1,
    next: {
        data: 3,
        next: {
            data: 5,
            next: null,
        },
    },
};

// Second sorted linked list: 2 -> 4 -> 6
const head2 = {
    data: 2,
    next: {
        data: 4,
        next: {
            data: 6,
            next: null,
        },
    },
};

const mergedList = mergeSortedLists(head1, head2);

// Traverse the merged list and print the values
let current = mergedList;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}
//output :
1
2
3
4
5
6
