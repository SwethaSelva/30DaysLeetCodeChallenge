/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/submissions/ - easy
 * 
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) hash[s[i]] = [1, i];
    else hash[s[i]][0] = hash[s[i]][0] + 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] === 1) return i;
  }
  // for (let char in hash) {
  //     if (hash[char][0] === 1) return hash[char][1];
  // }
  return -1;
};

console.log(firstUniqChar("acaadcad"));