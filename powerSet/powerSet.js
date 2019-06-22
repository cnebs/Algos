/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {

  // remove dupes using an obj
  let obj = {};

  for ( let i in str ) {
    obj[ str[i] ] = 1;
  };
  // console.log(obj);

  // build a transfer and combo holder array
  let arr = Object.keys(obj);
  let combos = [[]];

  for ( let i in arr ) {
    let len = combos.length; // stop inf loop up ahead w/ this

    // build nested array of combos
    for( let x = 0; x < len; x++ ){
      combos.push( combos[x].concat(arr[i]) )
    }
  }
  // join the combos into strings and return it
  let result = combos.map((combo) => combo.join(''));

  return result;
};

console.log(powerSet("jump"));