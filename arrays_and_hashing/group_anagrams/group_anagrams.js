/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 *
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 *
 * Example:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 *
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const anagrams = {};
  for (let i = 0; i < strs.length; i++) {
    const root = strs[i].split("").sort().join();
    if (anagrams.hasOwnProperty(root)) {
      anagrams[root].push(strs[i]);
    } else {
      anagrams[root] = [strs[i]];
    }
  }

  const solution = [];
  for (const root in anagrams) {
    solution.push(anagrams[root]);
  }

  return solution;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));