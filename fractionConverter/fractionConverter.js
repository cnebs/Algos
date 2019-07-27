/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'
 *
 */

var toFraction = function(number) {

  let n = number, d = 1;

  while (n % 1 !== 0 ) {
    d++;
    n = number * d
  }

return `${Math.round(n)}/${Math.abs(d)}`
}

console.log(toFraction(0.75));

