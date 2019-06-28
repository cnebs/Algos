
/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */


Array.prototype.isSubsetOf = function (arr, obj={}) {

  arr.forEach((element) =>  obj[JSON.stringify(element)] = 1);

  return this.reduce( (t, element) => !obj[JSON.stringify(element)] ? false : t, true);

};


// ####### testing #######
let context = [ 'fox', 'dog', 'cow', ['sup', {'yo':'hi'}] ]
let input = [ 'dog', 'cow', 'fox', ['sup', {'yo':'greeting'}] ]

console.log('\nIs ', context, ' in \n',input, '? \n\n', 'Result: ', context.isSubsetOf(input),'\n');