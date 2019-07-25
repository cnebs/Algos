/*
Given a full sudoku board, return 'solved' if the board is solved, or 'invalid' if the board is invalid.

A sudoku board is solved if each column, row, and 3 x 3 subgrid contains all of the digits from 1 to 9.

Input: A String representing the board. 
Output: 'solved' if the board is valid, 'invalid' if it isn't

Example input: 
"735814296\n
896275314\n
214963857\n
589427163\n
362189745\n
471356982\n
923541678\n
648792531\n
157638429"
*/



function sudokuChecker(board) {
  // Your code here.

  let solved = false, rowCheck, colCheck, gridCheck, row, col;

  rowCheck = row => {
    for (let char in row) {
      if (!row.includes(String(Number(char)+1))) {
        return false
      }
    } return true;
  }

  colBuilder = board => {
    const colBoard = [];
    for (row of board) {
      console.log(row);
    }
  }

  
  const BOARD = [];
  
  (board.split("\n")).forEach( row => BOARD.push(row.split("")))
  
  for ( row in BOARD ) {
    if (!rowCheck) return 'invalid';
  }
  
  
  console.log('colBuilder test', colBuilder(BOARD))

  console.log(BOARD);


  return solved;
  
}

const test = sudokuChecker("735814296\n896275314\n214963857\n589427163\n362189745\n471356982\n923541678\n648792531\n157638429");

console.log(test);