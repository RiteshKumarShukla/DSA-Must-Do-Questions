# Minimum Element in Stack in O(1) space

## Problem Statement

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

## Example

### Operations

`push(-2)`
`push(0)`
`push(-3)`
`getMin()`
`pop()`
`top()`
`getMin()`

### Output

`-3`
`0`
`-2`

## Solution

One possible solution to this problem is to use a single stack to store the elements and a variable to store the minimum element. 

When we push an element to the stack, we compare it with the current minimum element. If it is smaller, we push the current minimum element to the stack before pushing the new element. We also update the minimum element as the new element.

When we pop an element from the stack, we check if it is equal to the current minimum element. If it is, we pop another element from the stack and update the minimum element as that element.

When we get the top element from the stack, we simply return the top element of the stack.

When we get the minimum element from the stack, we simply return the minimum element variable.

The time complexity of this solution is O(1), since all operations are done in constant time.

The space complexity of this solution is O(1), since we only use a single stack and a variable.

## Code

Here is a possible implementation of this solution in JavaScript:

```javascript
class MinStack {
  constructor() {
    // create an empty stack
    this.stack = [];
    // initialize min as infinity
    this.min = Infinity;
  }

  push(x) {
    // if x is smaller than min
    if (x < this.min) {
      // push min to the stack
      this.stack.push(this.min);
      // update min as x
      this.min = x;
    }
    // push x to the stack
    this.stack.push(x);
  }

  pop() {
    // pop the top element from the stack
    let x = this.stack.pop();
    // if x is equal to min
    if (x === this.min) {
      // pop another element from the stack and update min as that element
      this.min = this.stack.pop();
    }
  }

  top() {
    // return the top element of the stack
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    // return min
    return this.min;
  }
}
