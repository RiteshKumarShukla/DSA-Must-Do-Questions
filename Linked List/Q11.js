//Implement a singly linked list and perform basic operations like insertion and deletion.

function Node(data) {
    this.data = data;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.size = 0;
}

LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data);

    if (!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    this.size++;
};

LinkedList.prototype.insertAtBeginning = function (data) {
    const newNode = new Node(data);

    if (!this.head) {
        this.head = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }

    this.size++;
};

LinkedList.prototype.insertAtPosition = function (data, position) {
    if (position < 0 || position > this.size) {
        throw new Error('Invalid position');
    }

    if (position === 0) {
        this.insertAtBeginning(data);
    } else if (position === this.size) {
        this.insertAtEnd(data);
    } else {
        const newNode = new Node(data);
        let current = this.head;
        let count = 0;

        while (count < position - 1) {
            current = current.next;
            count++;
        }

        newNode.next = current.next;
        current.next = newNode;

        this.size++;
    }
};

LinkedList.prototype.removeFromPosition = function (position) {
    if (position < 0 || position >= this.size) {
        throw new Error('Invalid position');
    }

    if (position === 0) {
        this.head = this.head.next;
    } else {
        let current = this.head;
        let count = 0;

        while (count < position - 1) {
            current = current.next;
            count++;
        }

        current.next = current.next.next;
    }

    this.size--;
};

LinkedList.prototype.display = function () {
    let current = this.head;
    let result = '';

    while (current) {
        result += current.data + ' ';
        current = current.next;
    }

    console.log(result.trim());
};

LinkedList.prototype.getSize = function () {
    return this.size;
};


//Example Usage :
const linkedList = new LinkedList();

linkedList.insertAtEnd(10);
linkedList.insertAtEnd(20);
linkedList.insertAtBeginning(5);
linkedList.insertAtPosition(15, 2);
linkedList.display(); // Output: 5 10 15 20

linkedList.removeFromPosition(2);
linkedList.display(); // Output: 5 10 20

console.log(linkedList.getSize()); // Output: 3
