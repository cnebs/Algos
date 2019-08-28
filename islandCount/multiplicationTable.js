const buildMultiplicationTable = (x, y) => {

  var result = '\n';
  for (var i = 1; i < x; i++) {
    for (var j = 1; j < y; j++) {
        result += (i*j) + ' ';
    }
    result += '\n'
  }
return result;
}

const test = buildMultiplicationTable(4, 5);
console.log(test);