
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {

  var DIGIT_VALUES = {
I: 1,
V: 5,
X: 10,
L: 50,
C: 100,
D: 500,
M: 1000
};

var result = 0;

if (typeof romanNumeral !== 'string') {return null};

for (var i = 0; i < romanNumeral.length; i++) {

  var numeral = romanNumeral[i]

  if ( !DIGIT_VALUES[numeral] )

  if ( romanNumeral === '' ) {
    return 0;
  }

  if ( romanNumeral[i+1] ) {
    var nextNumeral = romanNumeral[i+1];
  }

  if(DIGIT_VALUES[numeral] < DIGIT_VALUES[nextNumeral]) {
    result = result-DIGIT_VALUES[numeral];
  } else {
    result = result+DIGIT_VALUES[numeral];
  }
}

return result;

};
