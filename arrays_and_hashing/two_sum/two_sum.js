/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  let hashMap = {};

  for (const idx in nums) {
    // the complement is the difference between the target and the value at the current index
    let complement = target - nums[idx];
    // if the hash map contains the complement as a key, the two-sum has been found
    if (hashMap.hasOwnProperty(complement)) {
      return [hashMap[complement], idx];
    }
    // otherwise map the key-value pair as [value, index]
    hashMap[nums[idx]] = idx;
  }

  return [];
}

console.log(twoSum([2, 7, 11, 15], 17));