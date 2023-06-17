// Merge two sorted arrays into a sorted array without using extra space.

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        mergedArray.push(arr1[i]);
        i++;
      } else {
        mergedArray.push(arr2[j]);
        j++;
      }
    }
  
    // Append remaining elements from arr1, if any
    while (i < arr1.length) {
      mergedArray.push(arr1[i]);
      i++;
    }
  
    // Append remaining elements from arr2, if any
    while (j < arr2.length) {
      mergedArray.push(arr2[j]);
      j++;
    }
  
    return mergedArray;
  }
  
  // Example usage:
  const arr1 = [1, 3, 5, 7];
  const arr2 = [2, 4, 6, 8];
  const merged = mergeSortedArrays(arr1, arr2);
  console.log("Merged Array:", merged);
  