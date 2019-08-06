/* 
* 
* Integer Reverse
* 
* Given a positive integer, return its digits reversed. 
* 
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY. 
* - Only use integers and math in your solution.
*
*/

function reverseInteger(number){
  // TODO: Implement this function!
  let reverseNum = 0;

  while (number>1) {

    reverseNum = ( (reverseNum * 10) + (number % 10) );
    number = Math.floor( number/10 )
  }
  
  return reverseNum;
}

const test = reverseInteger(123);

console.log(test)

// num=51
// 0
// +
// 1=1
// num=
// Math.floor(51/10)
// =5

// 1=10+
// 5%10
// =
// 5
// Math.floor(5/10)
// 0