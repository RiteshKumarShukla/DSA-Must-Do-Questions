// Find the intersection point of two linked lists.


function Node(value) {
    this.value = value;
    this.next = null;
}

function getLinkedListLength(head) {
    let length = 0;
    while (head) {
        length++;
        head = head.next;
    }
    return length;
}

function getIntersectionPoint(headA, headB) {
    const lengthA = getLinkedListLength(headA);
    const lengthB = getLinkedListLength(headB);

    let currentA = headA;
    let currentB = headB;

    // Move the pointer of the longer list to align the lengths of both lists
    if (lengthA > lengthB) {
        let diff = lengthA - lengthB;
        while (diff > 0) {
            currentA = currentA.next;
            diff--;
        }
    } else if (lengthB > lengthA) {
        let diff = lengthB - lengthA;
        while (diff > 0) {
            currentB = currentB.next;
            diff--;
        }
    }

    // Traverse both lists together until the intersection point is found
    while (currentA && currentB) {
        if (currentA === currentB) {
            return currentA; // Intersection point found
        }
        currentA = currentA.next;
        currentB = currentB.next;
    }

    return null; // No intersection point found
}

// Example usage:
// Create two linked lists: 1 -> 2 -> 3 -> 6 -> 7 and 4 -> 5 -> 6 -> 7
const headA = new Node(1);
headA.next = new Node(2);
headA.next.next = new Node(3);
const intersectionNode = new Node(6);
intersectionNode.next = new Node(7);
headA.next.next.next = intersectionNode;

const headB = new Node(4);
headB.next = new Node(5);
headB.next.next = intersectionNode;

// Find the intersection point of the two linked lists
const intersection = getIntersectionPoint(headA, headB);
console.log(intersection); // Output: Node { value: 6, next: Node { value: 7, next: null } }
