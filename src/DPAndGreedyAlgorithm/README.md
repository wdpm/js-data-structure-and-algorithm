# Dynamic Programming
```
动态规划的三个步骤： 
- (1) 定义子问题； 
- (2) 实现要反复执行而解决子问题的部分（递归）； 
- (3) 识别并求解边界条件。
```

### 最少硬币找零问题
- 硬币找零问题:给出要找零的钱数，以及可用的硬币面额d1…dn及其数量，求解找零方法的组合方案个数。
- 最少硬币找零问题:给出要找零的钱数，以及可用的硬币面额d1…dn及其数量，求解所需最少的硬币个数的组合方案。
```
例:美国有以下面额（硬币）：d1=1，d2=5，d3=10，d4=25。 
要找36美分的零钱，求解所需的最少硬币数的组合方案
```
>DP算法中，先找到对每个x<n的解。然后，将解建立在更小的值的解的基础上。 
``` js
//TODO:代码解析
```

# Greedy Algorithm
>希望通过每个阶段的局部最优解，来达全局最优解
``` js
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
    
     var minCoinChange2 = new MinCoinChange([1, 3, 4]);
     console.log(minCoinChange2.makeChange(6));//[ 4, 1, 1 ]
```
- 打印过程：
```
total 0 + coin 4
change: 4
total: 4
==================
total 4 + coin 1
change: 4,1
total: 5
==================
total 5 + coin 1
change: 4,1,1
total: 6
==================
[ 4, 1, 1 ]
```
- 结果分析：期望解[3,3]并没有取到，而是取得了[4,1,1]这个可行解，但是，[4,1,1]不是最少找零组合方案。
- 结论：贪心算法不一定取到最优解。
