/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/


var evenOccurrence = function(arr) {
  
  let obj = {};
  let element;
  
  // obj -> { ele: 1, ele: 1, ele: 3, ele: 1, ... }
  arr.forEach( (element) => obj[element] = obj[element] +1 || 1 ); 

  // obj @ arr[ele] -> { oddEle: 3, evenEle: 2, evenEleTwo: 4 } -> return 'evenEle'
  for ( element in arr ) {
    if (obj[arr[element]] % 2 === 0) { return arr[element] };
  };

  return null;
};





var onlyEven = evenOccurrence(['meow', 2, 2, 'meow']);
console.log('First even occurence: ', onlyEven); // -> meow
