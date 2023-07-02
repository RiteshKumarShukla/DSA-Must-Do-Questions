// Implement a stack that supports push, pop, and findMiddle operations in O(1) time and space.

function Node(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}

function Stack() {
    this.head = null;
    this.middle = null;
    this.count = 0;
}

Stack.prototype.push = function (value) {
    const newNode = new Node(value);
    if (this.head === null) {
        this.head = newNode;
        this.middle = newNode;
    } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;

        if (this.count % 2 === 0) {
            this.middle = this.middle.prev;
        }
    }
    this.count++;
};

Stack.prototype.pop = function () {
    if (this.head === null) {
        return null;
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (this.head !== null) {
        this.head.prev = null;
    }

    if (this.count % 2 === 1) {
        this.middle = this.middle.next;
    }

    this.count--;
    return value;
};

Stack.prototype.findMiddle = function () {
    if (this.middle === null) {
        return null;
    }
    return this.middle.value;
};
