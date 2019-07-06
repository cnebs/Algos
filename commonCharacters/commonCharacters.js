/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



var commonCharacters = function(string1, string2) {
  let obj1 = {};
  let obj2 = {};
  let result = '';
  let c;

  for ( c of string1 ) {
    obj1[ c ] = 1;
  }
  for ( c of string2 ) {
    obj2[ c ] = 1;
  }
  for ( c of string1 ) {
    if ( obj1[ c ] == obj2[ c ] ) {
      obj1[ c ]++
    }
  }
  for ( c in obj1 ) {
    if (obj1[ c ] > 1) {
      result += c;
    }
  }
  return result;

};

let cc = commonCharacters('hello', 'howdy');
console.log(cc);