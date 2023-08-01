# Next Greater Element

## Problem Statement

Given an array, print the Next Greater Element (NGE) for every element.

The Next greater Element for an element x is the first greater element on the right side of x in the array. Elements for which no greater element exist, consider the next greater element as -1.

## Example

### Input

`arr = [4, 5, 2, 25]`

### Output

`4 --> 5
5 --> 25
2 --> 25
25 --> -1`

### Explanation

The next greater element of 4 is 5, since it is the first element on the right of 4 that is greater than 4.

The next greater element of 5 is 25, since it is the first element on the right of 5 that is greater than 5.

The next greater element of 2 is 25, since it is the first element on the right of 2 that is greater than 2.

The next greater element of 25 is -1, since there is no element on the right of 25 that is greater than 25.

## Solution

One possible solution to this problem is to use a stack to store the elements of the array in decreasing order.

We iterate through the array from left to right and for each element, we pop all the elements from the stack that are smaller than the current element and print their next greater element as the current element.

If the stack is empty or the top element of the stack is larger than the current element, we push the current element to the stack.

After iterating through the array, we pop all the remaining elements from the stack and print their next greater element as -1.

The time complexity of this solution is O(n), where n is the size of the array, since we process each element at most twice (once when pushing and once when popping).

The space complexity of this solution is O(n), where n is the size of the array, since we use a stack to store the elements.

## Code

Here is a possible implementation of this solution in JavaScript:

```javascript
function nextGreaterElement(arr) {
  // create an empty stack
  let stack = [];
  // iterate through the array from left to right
  for (let x of arr) {
    // while the stack is not empty and the top element is smaller than x
    while (stack.length > 0 && stack[stack.length - 1] < x) {
      // pop the top element and print its next greater element as x
      let y = stack.pop();
      console.log(`${y} --> ${x}`);
    }
    // push x to the stack
    stack.push(x);
  }
  // while the stack is not empty
  while (stack.length > 0) {
    // pop the top element and print its next greater element as -1
    let y = stack.pop();
    console.log(`${y} --> -1`);
  }
}
```
