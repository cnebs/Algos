/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  if (string === '') return null;
  let longest = run = [ 0, 0 ];
  for ( let i = 1; i < string.length; i++ ) {
    if ( string[ i ] === string[ i - 1 ] ) {
      run[1] = i;
      longest = ( run[ 1 ] - run[ 0 ] > longest[ 1 ] - longest[ 0 ] ) ? run : longest;
    } else run = [ i, i ];
  }
  return longest;
};


// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

let rStr = randomString(45);
let trial = longestRun(rStr);
console.log('\n----------\nTrial: \n\n For string: \'', rStr, '\'\n\n Result: ', trial, '\n----------');