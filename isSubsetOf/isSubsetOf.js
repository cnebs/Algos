
/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */


Array.prototype.isSubsetOf = function (arr, obj={}) {

  arr.forEach((element) =>  obj[JSON.stringify(element)] = 1);

  return this.reduce( (t, element) => !obj[JSON.stringify(element)] ? false : t, true);

};


// ####### testing #######
let context = [ 'fox', 1, 1, 'dog', {"key":"value"}] ;
let input = [ 'dog', 1, 1,'cow', 'fox', {"key": "value"}, [1, 2, {"key":"value"}]] ;

console.log('---\nIs: \n', context, ' \nin: \n',input, '\n? \n\n', 'Result: ', context.isSubsetOf(input),'\n---');