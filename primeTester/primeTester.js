/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if (typeof n !== 'number' || n < 1 || n % 1 !== 0) {

    // n isn't a number or n is less than 1 or n is not an integer

    return false;
  }

  // TODO: return true if n is prime, false otherwise

  // loop through numbers between 0 and n
  for ( let i = 0; i <= n; i++ ) {

    // if i isn't 0, 1, or n:
    if ( i !== 0 && i !== 1 && i !== n) {

      // if i % n has no remainder, n isn't prime so return false
      if ( n % i === 0 ) {
        return false;
      }
    }
  } // otherwise return true
    return true;

};

/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {

  // result array
  let primes = [];

  // loop through input range using x, check if not a valid input
  for ( let x = start; x <= end; x++ ) {
    if (typeof x !== 'number' || x < 1 || x % 1 !== 0) {
      continue;
    } 
    // for each x, loop from 0 to x using i
    for ( let i = 0; i <= x; i++ ) {
      // if x % i has a remainder, x isn't prime, break the loop and move onto the next x
      if ( i !== 0 && i !== 1 && i !== x) {
       if ( x % i === 0 ) {
          break;
        }
        // if x is a prime, push it into the result array
      } else if ( i === x ) {
        if ( x % i === 0 ) {
          primes.push(x);
        }
      }
    }
  }
    // return whatever is in the result array
    return primes;
};