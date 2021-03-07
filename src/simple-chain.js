const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    this.length = length;
    return this;
  },

  chainElements: [],
  chain: ``,

  addLink(value) {
    this.value = value;
    if (this.chainElements.length === 0) {
      this.position = 1;
      this.length = 1;
    } else {
      this.position++;
      this.length++;
    }
    this.chainElements.push(value);
    return this;
  },
  removeLink(position) {
    this.position = position;
    if (Number.isNaN(position) === true || Number.isInteger(position) === false) {
      this.chainElements = [];
      throw new Error();
    }
    this.chainElements.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainElements = this.chainElements.reverse();
    return this;
  },
  finishChain() {
    this.chainElements.forEach(function (elem, index) {
      let tmp = ``;
      elem === undefined ? tmp = `(  )` : tmp = `( ${elem} )`;
      index === 0 ? chain = tmp : chain += `~~${tmp}`;
    });
    this.chainElements = [];
    return chain;
  }
};

module.exports = chainMaker;
