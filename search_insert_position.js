/**
 * https://leetcode.com/problems/search-insert-position/ - easy
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let end = nums.length - 1;
  if (nums[end] < target) return nums.length;
  let start = 0;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) {
      if (nums[mid - 1] !== undefined && nums[mid - 1] < target) return mid;
      end = mid - 1;
    } else {
      if (nums[mid + 1] !== undefined && nums[mid + 1] > target) return mid + 1;
      start = mid + 1;
    }
  }
  return mid;
};

console.log(searchInsert([1,3,5,6], 7)); // 3