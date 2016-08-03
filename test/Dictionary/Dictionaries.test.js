var Dictionary = require('../../src/Dictionary/Dictionary.js').Dictionaty;

var dict = new Dictionary();

dict.set('A', '1');
dict.set('B', '2');
dict.set('C', '3');

exports.testSet = function (test) {
    test.ok(dict.has('A'), "test set() and has() no error");
    test.ok(dict.has('B'), "test set() and has() no error");
    test.ok(dict.has('C'), "test set() and has() no error");
    test.done();
};

exports.testSize = function (test) {
    test.deepEqual(dict.size(), 3, "test size() no error");
    test.done();
};

exports.testKeys = function (test) {
    test.deepEqual(dict.keys(), ['A', 'B', 'C'], "test keys() no error");
    test.done();
};

exports.testValues = function (test) {
    test.deepEqual(dict.values(), ['1', '2', '3'], "test values() no error");
    test.done();
};

exports.testGet = function (test) {
    test.deepEqual(dict.get("A"), "1", "test get() no error");
    test.done();
};

exports.testRemove = function (test) {
    dict.remove('A');
    test.deepEqual(dict.keys(), ['B', 'C'], "test remove() no error");
    test.deepEqual(dict.values(), ['2', '3'], "test remove() no error");
    test.done();
};

exports.testGetItems = function (test) {
    test.deepEqual(dict.getItems(), {B: '2', C: '3'}, "test getItems() no error");
    test.done();
};

exports.testClear = function (test) {
    dict.clear();
    test.deepEqual(dict.getItems(), {}, "test clear() no error");
    test.done();
};

//TODO: test dict.each()

