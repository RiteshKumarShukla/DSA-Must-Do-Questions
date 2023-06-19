

function Node(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
}

function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
}

DoublyLinkedList.prototype.append = function (data) {
    const newNode = new Node(data);

    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    this.size++;
};

DoublyLinkedList.prototype.prepend = function (data) {
    const newNode = new Node(data);

    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    this.size++;
};

DoublyLinkedList.prototype.insertAt = function (data, position) {
    if (position < 0 || position > this.size) {
        throw new Error('Invalid position');
    }

    const newNode = new Node(data);

    if (position === 0) {
        this.prepend(data);
    } else if (position === this.size) {
        this.append(data);
    } else {
        let current = this.head;
        let count = 0;

        while (count < position - 1) {
            current = current.next;
            count++;
        }

        newNode.prev = current;
        newNode.next = current.next;
        current.next.prev = newNode;
        current.next = newNode;

        this.size++;
    }
};

DoublyLinkedList.prototype.removeAt = function (position) {
    if (position < 0 || position >= this.size) {
        throw new Error('Invalid position');
    }

    let current = this.head;

    if (position === 0) {
        this.head = current.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
    } else if (position === this.size - 1) {
        current = this.tail;
        this.tail = current.prev;
        this.tail.next = null;
    } else {
        let count = 0;

        while (count < position) {
            current = current.next;
            count++;
        }

        current.prev.next = current.next;
        current.next.prev = current.prev;
    }

    this.size--;
};

DoublyLinkedList.prototype.getSize = function () {
    return this.size;
};

DoublyLinkedList.prototype.display = function () {
    let current = this.head;
    let result = '';

    while (current) {
        result += current.data + ' ';
        current = current.next;
    }

    console.log(result.trim());
};
