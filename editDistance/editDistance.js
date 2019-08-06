// Given two strings, find the minimum number of edits/operations required to convert the first string into the second string, given that the only operations can be insertion, removal, or replacement.

// Challenge: Do this in O(m x n) time, where m, n are the respective lengths of str1 and str2.

function editDistance(str1, str2) {
  // Your code here.

  let s1 = str1;
  let s2 = str2;
  const         s1o = {}
  const         s2o = {};
  const         nso = {};
  let    insertions = 0;
  let      removals = 0;
  let  replacements = 0;

  for (let char in s1) {
    s1o[s1[char]] = 0;
  }
  for (let char in s2) {
    s2o[s2[char]] = 1;

  }
  console.log(s1o, s2o);

  if ( s1.length > s2.length ) {
    for (let char in s2) {
      if (s1o[s2[char]] != null) { 
        s1o[s2[char]]++;
      } else {
        delete s1o[s2[char]]
        removals++
      }
    }
      
  }
  console.log('s1o post-edit: ', s1o);
  console.log(`
  -------\n
  Removals: ${removals}\n
  Insertions: ${insertions}\n
  Replacements: ${replacements}\n
  -------`)

}

let test = editDistance('abcdf', 'aceg');
console.log(test);