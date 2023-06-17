// Find the second largest element in an array.

function findSecondLargest(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
      } else if (arr[i] > secondMax && arr[i] !== max) {
        secondMax = arr[i];
      }
    }
  
    return secondMax;
  }
  
  // Example usage:
  const array = [5, 3, 8, 1, 9, 4];
  const secondLargest = findSecondLargest(array);
  console.log("Second largest element:", secondLargest);
  