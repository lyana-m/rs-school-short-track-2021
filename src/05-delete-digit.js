/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = String(n).split('')
    .map((item) => Number(item));
  const compArr = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const newArr = [...arr].filter((item, index) => index !== i)
      .reduce((acc, curr) => acc + curr, 0);
    compArr[i] = newArr;
  }
  const max = Math.max.apply(null, compArr);
  result = Number(arr.filter((item, index) => index !== compArr.indexOf(max)).join(''));
  return result;
}

module.exports = deleteDigit;
