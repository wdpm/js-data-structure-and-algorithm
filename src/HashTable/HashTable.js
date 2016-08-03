function HashTable() {

    var table = [];

    /**
     * TODO:If key1==key2,what will happen?(Although this possibility is very low)need to consider this circumstance
     * @param key
     * @returns {number}
     */
    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };

    /**
     * a hash function with very low collision possibility
     * @param key
     * @returns {number}
     */
    var djb2HashCode = function (key) {
        var hash = 5381;
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    };

    var hashCode = function (key) {
        return loseloseHashCode(key);
    };

    this.put = function (key, value) {
        var position = hashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    };

    this.get = function (key) {
        return table[hashCode(key)];
    };

    this.remove = function (key) {
        table[hashCode(key)] = undefined;
    };

    this.print = function () {
        for (var i = 0; i < table.length; ++i) {
            if (table[i] !== undefined) {
                console.log(i + ": " + table[i]);
            }
        }
    };
}