/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let frequencyMap = {};
  for (let char of s) {
    if (frequencyMap.hasOwnProperty(char)) {
      frequencyMap[char]++;
    } else {
      frequencyMap[char] = 1;
    }
  }

  for (let char of t) {
    if (frequencyMap.hasOwnProperty(char)) {
      frequencyMap[char]--;
    } else {
      return false;
    }
  }

  for (const key in frequencyMap) {
    if (frequencyMap[key] !== 0) {
      return false;
    }
  }

  return true;
}

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram2(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  return (
    s.toLowerCase().split("").sort().join() ===
    t.toLowerCase().split("").sort().join()
  );
}

console.log(isAnagram("aacc", "ccac"));