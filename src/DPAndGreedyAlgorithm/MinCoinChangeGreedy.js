function MinCoinChangeGreedy(coins) {

    var coins = coins;

    this.makeChange = function (amount) {
        var change = [],
            total = 0;
        for (var i = coins.length - 1; i >= 0; i--) {
            var coin = coins[i];
            while (total + coin <= amount) {
                console.log("total " + total + " + coin " + coin);
                change.push(coin);
                console.log("change: " + change);
                total += coin;
                console.log("total: " + total);
                console.log("==================");
            }
        }
        return change;
    };
}

exports.MinCoinChangeGreedy = MinCoinChangeGreedy;
