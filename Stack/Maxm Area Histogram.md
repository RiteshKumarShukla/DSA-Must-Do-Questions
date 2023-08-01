# Maximum Area Histogram

## Problem Statement

Given an array of non-negative integers that represent the heights of bars in a histogram, find the maximum area of a rectangle that can be formed by any contiguous subset of the bars.

## Example

### Input

`arr = [6, 2, 5, 4, 5, 1, 6]`

### Output

`12`

### Explanation

The maximum area is obtained by the rectangle formed by the bars with heights 4 and 5 and width 3. The area is 4 x 3 = 12.

![histogram](https://i.imgur.com/8Z9XyfO.png)

## Solution

One possible solution to this problem is to use two stacks to store the indices of the bars with increasing heights from left to right and from right to left. 

We iterate through the array from left to right and for each element, we pop all the indices from the left stack that have higher heights than the current element and store the nearest smaller element to left (NSEL) for each index as the top index of the stack (or -1 if the stack is empty). 

We then push the current index to the left stack and repeat this process until we reach the end of the array.

Similarly, we iterate through the array from right to left and for each element, we pop all the indices from the right stack that have higher heights than the current element and store the nearest smaller element to right (NSER) for each index as the top index of the stack (or arr.length if the stack is empty). 

We then push the current index to the right stack and repeat this process until we reach the beginning of the array.

After finding the NSEL and NSER for each index, we calculate the width of the rectangle that can be formed by each bar as NSER - NSEL - 1. We then multiply this width with the height of each bar and find the maximum area among them.

The time complexity of this solution is O(n), where n is the size of the array, since we process each element at most twice (once when pushing and once when popping).

The space complexity of this solution is O(n), where n is the size of the array, since we use two stacks to store the indices.

## Code

Here is a possible implementation of this solution in JavaScript:

```javascript
function maxAreaHistogram(arr) {
  // create two empty stacks
  let leftStack = [];
  let rightStack = [];
  // create two empty arrays to store NSEL and NSER
  let NSEL = [];
  let NSER = [];
  // iterate through the array from left to right
  for (let i = 0; i < arr.length; i++) {
    // get the current element
    let x = arr[i];
    // while the left stack is not empty and the element at the top index is larger than x
    while (leftStack.length > 0 && arr[leftStack[leftStack.length - 1]] > x) {
      // pop the top index from the left stack and store its NSEL as -1
      let y = leftStack.pop();
      NSEL[y] = -1;
    }
    // if the left stack is not empty, then store its NSEL as top index
    if (leftStack.length > 0) {
      NSEL[i] = leftStack[leftStack.length - 1];
    } else {
      // otherwise, store its NSEL as -1
      NSEL[i] = -1;
    }
    // push i to the left stack
    leftStack.push(i);
  }
  // iterate through the array from right to left
  for (let i = arr.length - 1; i >= 0; i--) {
    // get the current element
    let x = arr[i];
    // while the right stack is not empty and the element at the top index is larger than x
    while (rightStack.length > 0 && arr[rightStack[rightStack.length - 1]] > x) {
      // pop the top index from the right stack and store its NSER as arr.length
      let y = rightStack.pop();
      NSER[y] = arr.length;
    }
    // if the right stack is not empty, then store its NSER as top index
    if (rightStack.length > 0) {
      NSER[i] = rightStack[rightStack.length - 1];
    } else {
      // otherwise, store its NSER as arr.length
      NSER[i] = arr.length;
    }
    // push i to the right stack
    rightStack.push(i);
  }
  // initialize maxArea as zero
  let maxArea = 0;
  // iterate through the array
  for (let i = 0; i < arr.length; i++) {
    // calculate the width of the rectangle as NSER - NSEL - 1
    let width = NSER[i] - NSEL[i] - 1;
    // calculate the area of the rectangle as width * height
    let area = width * arr[i];
    // update maxArea if area is larger
    if (area > maxArea) {
      maxArea = area;
    }
  }
  // return maxArea
  return maxArea;
}
