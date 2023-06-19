// Remove the Nth node from the end of a linked list. 

function removeNthFromEnd(head, n) {
    // Create a dummy node as the previous node of the head
    const dummy = new ListNode(0);
    dummy.next = head;
  
    let slow = dummy; // Slow pointer
    let fast = dummy; // Fast pointer
  
    // Move the fast pointer n steps ahead
    for (let i = 0; i <= n; i++) {
      fast = fast.next;
    }
  
    // Move both pointers until the fast pointer reaches the end of the list
    while (fast !== null) {
      slow = slow.next;
      fast = fast.next;
    }
  
    // Remove the Nth node by updating the pointers
    slow.next = slow.next.next;
  
    // Return the updated head
    return dummy.next;
  }
  