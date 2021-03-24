const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = "+", addition = "", additionRepeatTimes = 1, additionSeparator = "|" }) {
  const strString = String(str);
  const additionString = String(addition);
  let additionRepeatString = additionString;
  if (additionRepeatTimes > 1) {
    additionRepeatString = `${additionString}${additionSeparator}`.repeat(additionRepeatTimes);
    additionRepeatString = additionRepeatString.slice(0, additionRepeatString.lastIndexOf(additionSeparator));
  }
  let strRepeatWithAddition = `${strString}${additionRepeatString}`;
  if (repeatTimes > 1) {
    strRepeatWithAddition = `${strRepeatWithAddition}${separator}`.repeat(repeatTimes);
    strRepeatWithAddition = strRepeatWithAddition.slice(0, strRepeatWithAddition.lastIndexOf(separator));
}
  return strRepeatWithAddition;
};
