/*
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {

  let obj = {};

  for ( let i in str ) {
    obj[ str[i] ] = 1; // obj -> {j:1, u:1, m:1, p:1}
  };

  let arr = Object.keys( obj ); // arr -> ['j', 'u', 'm', 'p']
  let combos = [[]];

  for ( let i in arr ) {
    let len = combos.length; // stop infinite loop ahead
    for ( let x = 0; x < len; x++ ) {
      combos.push( combos[x].concat(arr[i]) ) // combos -> [[''], ['j'], ['u'], ['j', 'u'], ...]
    }
  }

 return combos.map((combo) => combo.join('')); // result -> ['', 'j', 'u', 'ju', ...]
};

console.log( powerSet('jump') );