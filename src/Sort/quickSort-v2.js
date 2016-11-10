/**
 * Created by wdpm on 16-11-11.
 */
'use strict';
function quickSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    var mid = Math.floor(arr.length / 2);
    var midValue = arr.splice(mid, 1);
    var left = [];
    var right = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] < midValue) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(midValue, quickSort(right));
}

var ret = quickSort([4, 67, 3, 21, 45, 0, -34, -6]);
console.log(ret);//[ -34, -6, 0, 3, 4, 21, 45, 67 ]


