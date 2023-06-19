// Implement a key-value store using a linked list, where keys and values are stored as nodes

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

    this.get = function (key) {
        let current = this.head;
        while (current) {
            if (current.key === key) {
                return current.value;
            }
            current = current.next;
        }
        return null;
    };

    this.remove = function (key) {
        if (!this.head) {
            return;
        }

        if (this.head.key === key) {
            this.head = this.head.next;
            return;
        }

        let prev = this.head;
        let current = this.head.next;
        while (current) {
            if (current.key === key) {
                prev.next = current.next;
                return;
            }
            prev = current;
            current = current.next;
        }
    };

    this.display = function () {
        let current = this.head;
        while (current) {
            console.log(`Key: ${current.key}, Value: ${current.value}`);
            current = current.next;
        }
    };
}

// Create a new instance of the linked list key-value store
const kvStore = new LinkedListKVStore();

// Insert key-value pairs
kvStore.put("name", "John");
kvStore.put("age", 25);
kvStore.put("city", "New York");

// Display the key-value pairs
kvStore.display();
// Output:
// Key: name, Value: John
// Key: age, Value: 25
// Key: city, Value: New York

// Retrieve values using keys
console.log(kvStore.get("age")); // Output: 25
console.log(kvStore.get("city")); // Output: New York

// Update a value
kvStore.put("age", 30);
console.log(kvStore.get("age")); // Output: 30

// Remove a key-value pair
kvStore.remove("name");
kvStore.display();
  // Output:
  // Key: age, Value: 30
  // Key: city, Value: New York