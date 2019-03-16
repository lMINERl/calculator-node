const sum = (ele1, ele2) => ele1 + ele2;

module.exports = (...args) => args.reduce(sum, 0);