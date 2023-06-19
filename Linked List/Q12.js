// Reverse a linked list iteratively and recursively. 



//Iterative Approach :
function reverseLinkedListIterative(head) {
    let prev = null;
    let current = head;

    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}


//Recursive approach:
function reverseLinkedListRecursive(head) {
    if (head === null || head.next === null) {
        return head;
    }

    let reversed = reverseLinkedListRecursive(head.next);
    head.next.next = head;
    head.next = null;

    return reversed;
}
