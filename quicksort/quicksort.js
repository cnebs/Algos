/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var swap = function(array, leftIndex, rightIndex){
  let temp = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = temp;
}
var divide = function(array, left, right) {
  let pivot = array[Math.floor((right + left) / 2)], 
  i = left, 
  j = right; 

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
      }
      while (array[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(array, i, j); 
        i++;
        j--;
      }
  }
  return i;
}

var quickSort = function(array, left, right) {
    // left and right have 2 be index vals
  let index;
  if (array.length > 1) {
    index = divide(array, left, right); 
    if (left < index - 1) { 
      quickSort(array, left, index - 1);
    }
    if (index < right) { 
      quickSort(array, index, right);
    }
  }
  return array;
}