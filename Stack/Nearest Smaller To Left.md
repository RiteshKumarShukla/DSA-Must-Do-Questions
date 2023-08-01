# Nearest Smaller to Left

## Problem Statement

Given an array, print the Nearest Smaller Element to Left (NSEL) for every element. 

The Nearest Smaller Element to Left for an element x is the first smaller element on the left side of x in the array. Elements for which no smaller element exist, consider the nearest smaller element as -1. 

## Example

### Input

`arr = [4, 5, 2, 10, 8]`

### Output

`4 --> -1
5 --> 4
2 --> -1
10 --> 2
8 --> 2`

### Explanation

The nearest smaller element to left of 4 is -1, since there is no element on the left of 4 that is smaller than 4.

The nearest smaller element to left of 5 is 4, since it is the first element on the left of 5 that is smaller than 5.

The nearest smaller element to left of 2 is -1, since there is no element on the left of 2 that is smaller than 2.

The nearest smaller element to left of 10 is 2, since it is the first element on the left of 10 that is smaller than 10.

The nearest smaller element to left of 8 is 2, since it is the first element on the left of 8 that is smaller than 8.

## Solution

One possible solution to this problem is to use a stack to store the elements of the array in increasing order. 

We iterate through the array from right to left and for each element, we pop all the elements from the stack that are larger than the current element and print their nearest smaller element to left as the current element. 

If the stack is empty or the top element of the stack is smaller than the current element, we push the current element to the stack.

After iterating through the array, we pop all the remaining elements from the stack and print their nearest smaller element to left as -1.

The time complexity of this solution is O(n), where n is the size of the array, since we process each element at most twice (once when pushing and once when popping).

The space complexity of this solution is O(n), where n is the size of the array, since we use a stack to store the elements.

## Code

Here is a possible implementation of this solution in JavaScript:

```javascript
function nearestSmallerToLeft(arr) {
  // create an empty stack
  let stack = [];
  // iterate through the array from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    // get the current element
    let x = arr[i];
    // while the stack is not empty and the top element is larger than x
    while (stack.length > 0 && stack[stack.length - 1] > x) {
      // pop the top element and print its nearest smaller element to left as x
      let y = stack.pop();
      console.log(`${y} --> ${x}`);
    }
    // push x to the stack
    stack.push(x);
  }
  // while the stack is not empty
  while (stack.length > 0) {
    // pop the top element and print its nearest smaller element to left as -1
    let y = stack.pop();
    console.log(`${y} --> -1`);
  }
}
