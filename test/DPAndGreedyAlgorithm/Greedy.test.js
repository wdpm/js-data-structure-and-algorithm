var MinCoinChangeGreedy = require('../../src/DPAndGreedyAlgorithm/MinCoinChangeGreedy').MinCoinChangeGreedy;


exports.testMinCoinChange1 = function (test) {
    var minCoinChange1 = new MinCoinChangeGreedy([1, 5, 10, 25]);
    var makeChange1 = minCoinChange1.makeChange(36);
    test.deepEqual(makeChange1, [25, 10, 1], "makeChange result is right");
    test.done();

};

exports.testMinCoinChange2 = function (test) {
    var minCoinChange2 = new MinCoinChangeGreedy([1, 3, 4]);
    var makeChange2 = minCoinChange2.makeChange(6);
    test.deepEqual(makeChange2, [4, 1, 1], "makeChange result is expected value,but not best solution");
    test.done();

};


