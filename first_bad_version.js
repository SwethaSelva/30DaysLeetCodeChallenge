/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
var isBadVersion = function (version) {
  // return version <= 4;
};

/**
 * https://leetcode.com/problems/first-bad-version/ - easy
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let start = 0;
    let end = n;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        if (!isBadVersion(mid - 1)) return mid;
        end = mid - 1;
      } else start = mid + 1;
    }
    return mid;
  };
};

let badVersion5 = solution(isBadVersion)
console.log(badVersion5(10));