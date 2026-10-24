const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
  '--discard-prev'
      '--discard-next'
  '--double-prev'
      '--double-next'
 *
 */
function transform(arr) {
  // Remove line below and write your code here
  if (!Array.isArray(arr)) {
    throw new Error("arr parameter must be an instance of the Array!");
  }
  let result = [];
  let discardNext = false;
  let doubleNext = false;

  arr.forEach((el) => {
    if (el === "--discard-next") {
      discardNext = true;
    } else if (el === "--double-next") {
      doubleNext = true;
    } else if (el === "--discard-prev") {
      if (result.length > 0) {
        result.pop();
      }
    } else if (el === "--double-prev") {
      if (result.length > 0) {
        result.push(result[result.length - 1]);
      }
    } else if (discardNext === true) {
      discardNext = false;
    } else if (doubleNext === true) {
      doubleNext = false;
      result.push(el, el);
    } else {
      result.push(el);
    }
  });
  return result;
}

module.exports = {
  transform,
};
