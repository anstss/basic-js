const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const result = {};
  const minTurns = Math.pow(2, disksNumber) - 1;
  const minSeconds = Math.floor(minTurns * 3600 / turnsSpeed);
  result.turns = minTurns;
  result.seconds = minSeconds;
  return result;
};
