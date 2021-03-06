const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr) === false) {
    throw new Error();
  } else {
    let resultArr = arr.slice(0);
    const discardNext = "--discard-next";
    const discardPrev = "--discard-prev";
    const doubleNext = "--double-next";
    const doublePrev = "--double-prev";
    
    for (let i = 0; i < resultArr.length; i++) {
      let current = resultArr[i];
      if (current === discardNext) {
        resultArr.splice(i, 2, undefined);
        i--;
      } else if (current === discardPrev) {
        resultArr[i - 1] === undefined ? resultArr.splice(i, 1) : resultArr.splice(i - 1, 2);
        i--;
      } else if (current === doubleNext) {
        resultArr[i + 1] === undefined ? resultArr.splice(i, 1) : resultArr.splice(i, 1, resultArr[i + 1]);
      } else if (current === doublePrev) {
        resultArr[i - 1] === undefined ? resultArr.splice(i, 1) : resultArr.splice(i, 1, resultArr[i - 1]);
      }
    }

    for (let i = 0; i < resultArr.length; i++) {
      if (resultArr[i] === undefined) {
        resultArr.splice(i, 1);
        i--;
      }
    }

    return resultArr;
  }
};
