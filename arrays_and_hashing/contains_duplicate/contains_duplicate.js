/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    let keys = {};
    for (let i = 0; i < nums.length; i++) {
        if (keys.hasOwnProperty(nums[i])) {
            return true;
        }
        keys[nums[i]] = 1;
    }
    return false;
}