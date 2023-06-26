// Design a stack that supports getMin, getMax, and getAverage operations in O(1) time.    

function StackWithStats() {
    this.stack = [];
    this.minStack = [];
    this.maxStack = [];
    this.total = 0;
}

StackWithStats.prototype.push = function (value) {
    this.stack.push(value);
    this.total += value;

    // Update minStack
    if (this.minStack.length === 0 || value <= this.getMin()) {
        this.minStack.push(value);
    }

    // Update maxStack
    if (this.maxStack.length === 0 || value >= this.getMax()) {
        this.maxStack.push(value);
    }
};

StackWithStats.prototype.pop = function () {
    if (this.stack.length === 0) {
        return null;
    }

    const poppedValue = this.stack.pop();
    this.total -= poppedValue;

    // Update minStack
    if (poppedValue === this.getMin()) {
        this.minStack.pop();
    }

    // Update maxStack
    if (poppedValue === this.getMax()) {
        this.maxStack.pop();
    }

    return poppedValue;
};

StackWithStats.prototype.getMin = function () {
    if (this.minStack.length === 0) {
        return null;
    }
    return this.minStack[this.minStack.length - 1];
};

StackWithStats.prototype.getMax = function () {
    if (this.maxStack.length === 0) {
        return null;
    }
    return this.maxStack[this.maxStack.length - 1];
};

StackWithStats.prototype.getAverage = function () {
    if (this.stack.length === 0) {
        return null;
    }
    return this.total / this.stack.length;
};

// Usage example
const stack = new StackWithStats();
stack.push(5);
stack.push(3);
stack.push(8);

console.log(stack.getMin()); // Output: 3
console.log(stack.getMax()); // Output: 8
console.log(stack.getAverage()); // Output: 5.33
