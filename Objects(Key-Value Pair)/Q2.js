// Write a function to insert a new key-value pair into a key-value store.

function Node(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
}

function LinkedListKVStore() {
    this.head = null;

    this.put = function (key, value) {
        const newNode = new Node(key, value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                if (current.key === key) {
                    current.value = value;
                    return;
                }
                current = current.next;
            }

            if (current.key === key) {
                current.value = value;
            } else {
                current.next = newNode;
            }
        }
    };

    // Other methods (get, remove, display) go here...
}

// Create a new instance of the linked list key-value store
const kvStore = new LinkedListKVStore();

// Insert key-value pairs
kvStore.put("name", "John");
kvStore.put("age", 25);
kvStore.put("city", "New York");
