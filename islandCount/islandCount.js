/**
 * Given a string representation of a 2d map, return the number of islands in the map. 
 * Land spaces are denoted by a zero, while water is denoted by a dot. Two land spaces
 * are considered connected if they are adjacent (but not diagonal).
 *
 */

function countIslands(mapStr) {
  // Your code here.

  const result = 0;
  const iArr = [];
  mapStr.split('\n').forEach( string => iArr.push([string]));
  // console.log(iArr);

  for ( let row = 0; row < iArr.length; i++ ) {

    for (let column = 0; column < row.length; column++) {
      
    }
  }

  return 'complete';
}

/*
.0...
.00..
....0
*/


var inputs = [
  '.0...\n.00..\n....0', 
  '..000.\n..000.\n..000.\n.0....\n..000.', 
  '..000.\n..0...\n..0.0.\n..0...\n..000.', 
  '0....0\n......\n..00..\n......\n0....0', 
  '00...0\n0...00\n......\n0.0.0.\n0.....', 
  '0...0\n0...0\n00000', '0...0\n..0..\n0...0', 
  '.', 
  '0', 
  '...\n..0\n.00', 
  '.....\n..0..\n.000.\n..0..\n.....', 
  '00..00\n..00..\n00..00\n..00..'
];

const test = countIslands(inputs[0]);

console.log(test);