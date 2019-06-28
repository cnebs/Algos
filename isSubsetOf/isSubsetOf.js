
Array.prototype.isSubsetOf = function (arr, result) {

  this.forEach(word => arr.includes(word) ? result = true : result = false);

  return result;

};


const context = ['merge','reset','add']
const input = ['reset','merge','add','commit']
console.log('\nIs ', context, ' in \n',input, '? \n\n','Result: ', context.isSubsetOf(input),'\n')