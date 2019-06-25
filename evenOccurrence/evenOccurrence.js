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
  
  // If item is in array, push into object and set to val 1, if already in object, val++ in object
  for ( i in arr ) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else if (obj[arr[i]]) {
      obj[arr[i]]++
    }
  }

  // Iterate through array, first array element that has an even count in object is returned
  for ( i in arr ) {
    if (obj[arr[i]] % 2 === 0) {
      return arr[i];
    };
  }

  // If no return yet, return null
  return null;
};

var onlyEven = evenOccurrence([1, 2, 2, 1, 3, 4, 2, 2]);
console.log('Result: ', onlyEven); //  4