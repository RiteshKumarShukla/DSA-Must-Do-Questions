# Stock Span Problem

## Problem Statement

The stock span problem is a financial problem where we have a series of N daily price quotes for a stock and we need to calculate the span of the stock’s price for all N days. The span Si of the stock’s price on a given day i is defined as the maximum number of consecutive days just before the given day, for which the price of the stock on the current day is less than its price on the given day. 

## Example

### Input

`arr = [100, 80, 60, 70, 60, 75, 85]`

### Output

`S = [1, 1, 1, 2, 1, 4, 6]`

### Explanation

On day 1, the span of the stock is 1, since there is no previous day with a lower price.

On day 2, the span of the stock is 1, since the previous day has a higher price.

On day 3, the span of the stock is 1, since the previous day has a higher price.

On day 4, the span of the stock is 2, since the previous two days have lower prices.

On day 5, the span of the stock is 1, since the previous day has a higher price.

On day 6, the span of the stock is 4, since the previous four days have lower prices.

On day 7, the span of the stock is 6, since all the previous days have lower prices.

## Solution

One possible solution to this problem is to use a stack to store the indices of the days with decreasing prices. 

We iterate through the array from left to right and for each element, we pop all the indices from the stack that have lower prices than the current element and calculate their spans as the difference between the current index and the top index of the stack (or zero if the stack is empty). 

We then push the current index to the stack and repeat this process until we reach the end of the array.

The time complexity of this solution is O(n), where n is the size of the array, since we process each element at most twice (once when pushing and once when popping).

The space complexity of this solution is O(n), where n is the size of the array, since we use a stack to store the indices.

## Code

Here is a possible implementation of this solution in JavaScript:

```javascript
function stockSpan(arr) {
  // create an empty stack
  let stack = [];
  // create an empty array to store the spans
  let S = [];
  // iterate through the array from left to right
  for (let i = 0; i < arr.length; i++) {
    // get the current element
    let x = arr[i];
    // while the stack is not empty and the element at the top index is smaller than x
    while (stack.length > 0 && arr[stack[stack.length - 1]] < x) {
      // pop the top index from the stack
      stack.pop();
    }
    // if the stack is empty, then there is no previous element with a lower price
    if (stack.length === 0) {
      // set the span as i + 1
      S[i] = i + 1;
    } else {
      // otherwise, set the span as i - top index
      S[i] = i - stack[stack.length - 1];
    }
    // push i to the stack
    stack.push(i);
  }
  // return S
  return S;
}
