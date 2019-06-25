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
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else if (obj[arr[i]]) {
      obj[arr[i]]++
    }
  }

  for ( i in arr ) {
    if (obj[arr[i]] % 2 === 0) {
      return arr[i];
    };
  }

  return null;
  
};

var onlyEven = evenOccurrence([1, 2, 2, 1, 3, 4, 2, 2]);
console.log('Result: ', onlyEven); //  4