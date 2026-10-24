const { decorateObject } = require("../lib");
const { NotImplementedError } = require("../lib");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    // Remove line below and write your code here
    return this.chain.length + 1;
  },
  addLink(value) {
    // Remove line below and write your code here
    if (arguments.length === 0) {
      this.chain.push("");
    } else {
      this.chain.push(value);
    }
    return this;
  },
  removeLink(position) {
    // Remove line below and write your code here
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // Remove line below and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    // Remove line below and write your code here
    const result = this.chain.map((item) => "( " + item + " )").join("~~");
    this.chain = [];
    return result;
  },
};

module.exports = {
  chainMaker,
};
