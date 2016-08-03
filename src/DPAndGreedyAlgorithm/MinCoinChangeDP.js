function MinCoinChangeDP(coins) {

    var coins = coins;

    var cache = {};

    this.makeChange = function (amount) {
        var me = this;
        if (!amount) {
            return [];
        }
        if (cache[amount]) {
            console.log('cache[' + amount + ']: ' + cache[amount]);
            return cache[amount];
        }
        var min = [], newMin, newAmount;
        for (var i = 0; i < coins.length; i++) {
            var coin = coins[i];
            newAmount = amount - coin;//sub problem
            // console.log("newAmount "+newAmount+" = amount "+amount+" - coin "+coin);
            if (newAmount >= 0) {
                newMin = me.makeChange(newAmount);
            }
            //push function into stack(36->1), and pop(1->36)
            // console.log("#newAmount: "+newAmount+' ;'+"newMin: "+newMin+" ;"+"min: "+min);
            if (
                newAmount >= 0 &&
                (newMin.length < min.length - 1 || !min.length) &&
                (newMin.length || !newAmount)
            ) {
                min = [coin].concat(newMin);
                console.log('new Min ' + min + ' for ' + amount);
            }
        }

        return (cache[amount] = min);
    };

}

exports.MinCoinChangeDP = MinCoinChangeDP;

