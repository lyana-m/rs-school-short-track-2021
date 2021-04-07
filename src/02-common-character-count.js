/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  const count1 = {};
  const count2 = {};
  let sum = 0;

  for (let i = 0; i < arr1.length; i++) {
    count1[arr1[i]] = count1[arr1[i]] ? (count1[arr1[i]] + 1) : 1;
  }
  for (let i = 0; i < arr2.length; i++) {
    count2[arr2[i]] = count2[arr2[i]] ? (count2[arr2[i]] + 1) : 1;
  }

  const keys = Object.keys(count1);
  keys.forEach((key) => {
    if (count2[key]) {
      sum += count1[key] <= count2[key] ? count1[key] : count2[key];
    }
  });

  return sum;
}

module.exports = getCommonCharacterCount;
