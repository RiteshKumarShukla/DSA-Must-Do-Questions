# Nearest Greater to Left

## Problem Statement

Given an array, print the Nearest Greater Element to Left (NGEL) for every element. 

The Nearest Greater Element to Left for an element x is the first greater element on the left side of x in the array. Elements for which no greater element exist, consider the nearest greater element as -1. 

## Example

### Input

`arr = [1, 3, 2, 4]`

### Output

`1 --> -1
3 --> -1
2 --> 3
4 --> -1`

### Explanation

The nearest greater element to left of 1 is -1, since there is no element on the left of 1 that is greater than 1.

The nearest greater element to left of 3 is -1, since there is no element on the left of 3 that is greater than 3.

The nearest greater element to left of 2 is 3, since it is the first element on the left of 2 that is greater than 2.

The nearest greater element to left of 4 is -1, since there is no element on the left of 4 that is greater than 4.

## Solution

One possible solution to this problem is to use a stack to store the elements of the array in decreasing order. 

We iterate through the array from right to left and for each element, we pop all the elements from the stack that are smaller than the current element and print their nearest greater element to left as the current element. 

If the stack is empty or the top element of the stack is larger than the current element, we push the current element to the stack.

After iterating through the array, we pop all the remaining elements from the stack and print their nearest greater element to left as -1.

The time complexity of this solution is O(n), where n is the size of the array, since we process each element at most twice (once when pushing and once when popping).

The space complexity of this solution is O(n), where n is the size of the array, since we use a stack to store the elements.

## Code

Here is a possible implementation of this solution in JavaScript:

```javascript
function nearestGreaterToLeft(arr) {
  // create an empty stack
  let stack = [];
  // iterate through the array from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    // get the current element
    let x = arr[i];
    // while the stack is not empty and the top element is smaller than x
    while (stack.length > 0 && stack[stack.length - 1] < x) {
      // pop the top element and print its nearest greater element to left as x
      let y = stack.pop();
      console.log(`${y} --> ${x}`);
    }
    // push x to the stack
    stack.push(x);
  }
  // while the stack is not empty
  while (stack.length > 0) {
    // pop the top element and print its nearest greater element to left as -1
    let y = stack.pop();
    console.log(`${y} --> -1`);
  }
}
