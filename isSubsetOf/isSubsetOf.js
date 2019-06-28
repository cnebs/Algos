
/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */


Array.prototype.isSubsetOf = function (arr) {
  let obj = {}

  arr.forEach((element) => obj[element] = 1); // map arr elements to obj- now obj/arr eles are strings

  return this.reduce( (tot, ele) => !obj[ele] ? false : tot, true); // from eles of 'this', if any are not in obj, false

};


let context = [ 'fox', 'dog', 'cow', ['sup'], {'hi':'greeting'} ]
let input = [ 'dog', 'cow', 'fox', ['sup'], {'hi':'greeting'} ]

console.log('\nIs ', context, ' in \n',input, '? \n\n', 'Result: ', context.isSubsetOf(input),'\n')
