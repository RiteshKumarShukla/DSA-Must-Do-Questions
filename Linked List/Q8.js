// Add two numbers represented by linked lists.

function addTwoNumbers(head1, head2) {
    let dummyHead = { value: 0, next: null }; // Create a dummy head node to hold the result
    let current = dummyHead; // Create a pointer to traverse the result list
    let carry = 0; // Variable to store the carry value during addition

    let p = head1; // Pointer for the first linked list
    let q = head2; // Pointer for the second linked list

    // Traverse both linked lists
    while (p || q) {
        let x = p ? p.value : 0; // Get the value of the current node in the first linked list
        let y = q ? q.value : 0; // Get the value of the current node in the second linked list

        let sum = x + y + carry; // Calculate the sum of the current nodes and the carry
        carry = Math.floor(sum / 10); // Calculate the new carry value
        current.next = { value: sum % 10, next: null }; // Create a new node with the digit value and set it as the next node in the result list
        current = current.next; // Move the pointer to the next node

        if (p) p = p.next; // Move the pointer of the first linked list if it exists
        if (q) q = q.next; // Move the pointer of the second linked list if it exists
    }

    // Check if there is any remaining carry
    if (carry > 0) {
        current.next = { value: carry, next: null }; // Create a new node with the carry value and set it as the next node in the result list
        current = current.next; // Move the pointer to the next node
    }

    return dummyHead.next; // Return the head of the resulting linked list (excluding the dummy head)
}

// Create the first linked list: 2 -> 4 -> 3
let head1 = { value: 2, next: { value: 4, next: { value: 3, next: null } } };

// Create the second linked list: 5 -> 6 -> 4
let head2 = { value: 5, next: { value: 6, next: { value: 4, next: null } } };

// Add the two linked lists
let result = addTwoNumbers(head1, head2);

// Print the resulting linked list
let current = result;
while (current) {
    console.log(current.value);
    current = current.next;
}
