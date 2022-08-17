/**
 * https://leetcode.com/problems/unique-morse-code-words/ - easy
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
  let morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let alphabet = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y:24, z: 25 };
  let result = {};
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let currentMorseCode = '';
    for (let j = 0; j < words[i].length; j++) {
      currentMorseCode += morseCode[alphabet[words[i][j]]];
    }
    if (!result[currentMorseCode]) {
      result[currentMorseCode] = true;
      count++;
    }
  }
  return count;
};

// console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])); // 2
console.log(uniqueMorseRepresentations(["qqbp","gmyhg","bduo","drvmt","nsszh","bhzh","nglsm","tplsm","nzthw","yfsw","kxhw","xeujq","navaota","jhbek","wbahk","wbahk","jhbek","yuvg","yuvg","yusmn"])); // 7