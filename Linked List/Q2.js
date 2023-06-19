// Check if a linked list is a palindrome.

function Node(value) {
    this.value = value;
    this.next = null;
}

function isLinkedListPalindrome(head) {
    if (!head || !head.next) {
        return true; // An empty list or a single-node list is considered a palindrome
    }

    // Find the middle node of the linked list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half of the linked list
    let reversedHead = null;
    while (slow) {
        const next = slow.next;
        slow.next = reversedHead;
        reversedHead = slow;
        slow = next;
    }

    // Compare the first half with the reversed second half of the linked list
    while (reversedHead) {
        if (head.value !== reversedHead.value) {
            return false; // Values don't match, not a palindrome
        }
        head = head.next;
        reversedHead = reversedHead.next;
    }

    return true; // All values match, it is a palindrome
}

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 2 -> 1
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

// Check if the linked list is a palindrome
const isPalindrome = isLinkedListPalindrome(head);
console.log(isPalindrome); // true
