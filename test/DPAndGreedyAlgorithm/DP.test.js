var MinCoinChangeDP = require('../../src/DPAndGreedyAlgorithm/MinCoinChangeDP').MinCoinChangeDP;


exports.testMinCoinChange1 = function (test) {
    var minCoinChange1 = new MinCoinChangeDP([1, 5, 10, 25]);
    var makeChange1 = minCoinChange1.makeChange(36);
    test.deepEqual(makeChange1, [1, 10, 25], "makeChange result is right");
    test.done();

};

exports.testMinCoinChange2 = function (test) {
    var minCoinChange2 = new MinCoinChangeDP([1, 3, 4]);
    var makeChange2 = minCoinChange2.makeChange(6);
    test.deepEqual(makeChange2, [3, 3], "makeChange result is right");
    test.done();

};
