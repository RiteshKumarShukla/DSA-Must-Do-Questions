# Rain Water Trapping

## Problem Statement

Given an array of non-negative integers that represent the heights of bars in a histogram, find the amount of water that can be trapped between the bars after raining.

## Example

### Input

`arr = [3, 0, 0, 2, 0, 4]`

### Output

`10`


## Solution

One possible solution to this problem is to use two arrays to store the maximum height of the bars from left to right and from right to left. 

We iterate through the array from left to right and for each element, we store the maximum height of the bars seen so far in the left array.

Similarly, we iterate through the array from right to left and for each element, we store the maximum height of the bars seen so far in the right array.

After finding the left and right arrays, we iterate through the array again and for each element, we calculate the minimum of the left and right values at that index. This represents the height of the water level at that index. We then subtract the height of the bar at that index from this value and add it to the total water amount.

The time complexity of this solution is O(n), where n is the size of the array, since we iterate through the array three times.

The space complexity of this solution is O(n), where n is the size of the array, since we use two arrays to store the maximum heights.

## Code

Here is a possible implementation of this solution in JavaScript:

```javascript
function rainWaterTrapping(arr) {
  // get the size of the array
  let n = arr.length;
  // create two arrays to store the maximum heights from left and right
  let left = [];
  let right = [];
  // initialize maxLeft and maxRight as zero
  let maxLeft = 0;
  let maxRight = 0;
  // iterate through the array from left to right
  for (let i = 0; i < n; i++) {
    // update maxLeft as the maximum of maxLeft and arr[i]
    maxLeft = Math.max(maxLeft, arr[i]);
    // store maxLeft in left[i]
    left[i] = maxLeft;
  }
  // iterate through the array from right to left
  for (let i = n - 1; i >= 0; i--) {
    // update maxRight as the maximum of maxRight and arr[i]
    maxRight = Math.max(maxRight, arr[i]);
    // store maxRight in right[i]
    right[i] = maxRight;
  }
  // initialize water as zero
  let water = 0;
  // iterate through the array again
  for (let i = 0; i < n; i++) {
    // calculate the minimum of left[i] and right[i]
    let min = Math.min(left[i], right[i]);
    // subtract arr[i] from min and add it to water
    water += min - arr[i];
  }
  // return water
  return water;
}
