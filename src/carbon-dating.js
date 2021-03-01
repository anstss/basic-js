const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string"
    || isNaN(Number(sampleActivity))
    || Number(sampleActivity) <= 0
    || Number(sampleActivity) > 15) {
    return false;
  } else {
    const activity = MODERN_ACTIVITY / sampleActivity;
    const k = Math.log(2) / HALF_LIFE_PERIOD;
    const result = Math.log(activity) / k;
    return Math.ceil(result);
  }
};
