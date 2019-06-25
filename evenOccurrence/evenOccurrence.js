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
      console.log('Item added to object: ', obj)
    } else if (obj[arr[i]]) {
      obj[arr[i]]++
    }
  }
  
  console.log('Object: ', obj);

  for ( i in arr ) {
    if (obj[arr[i]] % 2 === 0) {
      return arr[i];
    };
  }

  // for ( j in obj ) {
  //   if (obj[j] % 2 === 0) {
  //     return j;
  //   }
  // }
  // return null;
  
};

var onlyEven = evenOccurrence(['meow', 1, 1, 'meow']);
console.log('Result: ', onlyEven); //  4