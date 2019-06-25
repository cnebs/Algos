/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 */

var evenOccurrence = function(arr) {
  // Your code here.
  
  let obj = {};
  let i;
  let j;
  
  for ( i in arr ) {
    if (obj[arr[i]]) {
      obj[arr[i]]++
    } else {
      obj[arr[i]] = 1;
    }
  }
  
  for ( j in obj ) {
    if (obj[j] % 2 === 0) {
      return j;
    }
  }
  
};

var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
console.log(onlyEven); //  4