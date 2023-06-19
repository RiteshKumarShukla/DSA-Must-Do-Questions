// Check if a linked list is a palindrome.

function isPalindrome(head) {
    if (!head || !head.next) {
        return true; // An empty list or a list with one node is considered a palindrome
    }

    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half of the linked list
    let secondHalfHead = reverseList(slow);

    // Step 3: Compare the reversed second half with the first half
    let firstHalf = head;
    let secondHalf = secondHalfHead;
    while (firstHalf && secondHalf) {
        if (firstHalf.val !== secondHalf.val) {
            return false; // Elements don't match, not a palindrome
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }

    return true; // All elements match, it's a palindrome
}

// Helper function to reverse a linked list
function reverseList(head) {
    let prev = null;
    let current = head;

    while (current) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}




// Linked list: 1 -> 2 -> 3 -> 2 -> 1
const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 2,
                next: {
                    val: 1,
                    next: null,
                },
            },
        },
    },
};

console.log(isPalindrome(head)); // Output: true
