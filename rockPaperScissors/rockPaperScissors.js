/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

// non-recursive
var rockPaperScissors = function () {
    // TODO: your solution here
    // input: number of rounds to play RPS
    // output: array of strings, each of which contains n possible plays
    
    let rpsArr = ['R', 'P', 'S'];
    let result = [];
     
    // works for 3
    for ( var a in rpsArr ) {
        for ( var b in rpsArr ) {
            for ( var c in rpsArr ) {
                result.push( rpsArr[a] + rpsArr[b] + rpsArr[c] );
            }
        }
    }
    
    return result;
};
rockPaperScissors();


// RECURSIVE VERSION
var rockPaperScissors = function (n) {
    // TODO: your solution here
    // input: number of rounds to play RPS
    // output: array of strings, each of which contains n possible plays
    
    let rounds = n;
    const rps = ['R', 'P', 'S'];
    const result = [];

    function recurse(remaining, passed) {

      if( remaining === 0 ) {
          result.push( passed );
          return;
      }

      for ( let i = 0; i < rps.length; i++ ) {
            const curr = rps[ i ];
            recurse( remaining - 1, passed.concat(curr) );
      }
    };

    recurse(rounds, []);
    return result;
};
rockPaperScissors();