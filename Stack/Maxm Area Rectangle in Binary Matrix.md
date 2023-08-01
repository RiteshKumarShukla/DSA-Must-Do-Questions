# Maximum Area Rectangle in Binary Matrix

## Problem Statement

Given a 2D binary matrix of 0s and 1s, find the area of the largest rectangle containing only 1s.

## Example

### Input

`matrix = [
  [0, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 0, 0]
]`

### Output

`8`

### Explanation

The largest rectangle containing only 1s is formed by the submatrix of rows 2 and 3 and columns 1 to 4. The area is 2 x 4 = 8.

![binary matrix](https://i.imgur.com/5ZJ9Q5O.png)

## Solution

One possible solution to this problem is to use the maximum area histogram algorithm as a subroutine. 

We iterate through the rows of the matrix and for each row, we calculate the histogram of the cumulative sum of the elements in that row. For example, for the first row, the histogram is [0, 1, 1, 0], for the second row, the histogram is [1, 2, 2, 1], and so on.

We then apply the maximum area histogram algorithm to each histogram and find the maximum area among them.

The time complexity of this solution is O(mn), where m is the number of rows and n is the number of columns in the matrix, since we process each element once to calculate the histograms and once to apply the maximum area histogram algorithm.

The space complexity of this solution is O(n), where n is the number of columns in the matrix, since we use a stack to store the indices in the maximum area histogram algorithm.

## Code

Here is a possible implementation of this solution in JavaScript:

```javascript
function maxAreaRectangle(matrix) {
  // get the number of rows and columns
  let m = matrix.length;
  let n = matrix[0].length;
  // create an array to store the histograms
  let histograms = [];
  // iterate through the rows
  for (let i = 0; i < m; i++) {
    // create an array to store the histogram for this row
    let histogram = [];
    // iterate through the columns
    for (let j = 0; j < n; j++) {
      // if this element is zero, then set the histogram value as zero
      if (matrix[i][j] === 0) {
        histogram[j] = 0;
      } else {
        // otherwise, set the histogram value as one plus the previous row's value
        histogram[j] = (i > 0 ? histograms[i - 1][j] : 0) + matrix[i][j];
      }
    }
    // push this histogram to the histograms array
    histograms.push(histogram);
    // apply the maxAreaHistogram function to this histogram and update maxArea if larger
    let area = maxAreaHistogram(histogram);
    if (area > maxArea) {
      maxArea = area;
    }
  }
  
}

// This function is copied from the previous question
function maxAreaHistogram(arr) {
  
}
