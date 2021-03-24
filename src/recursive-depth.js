const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.depth = 1;
  }

  calculateDepth(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.depth++;
        return this.calculateDepth(arr.flat(1));
      }
    }
    const result = this.depth;
    this.depth = 1;
    return result;
  }
}
