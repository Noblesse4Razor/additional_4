"use strict";

module.exports = function multiply(first, second) {
    var a1 = first.split('').reverse();
    var a2 = second.split('').reverse();
    var result = [];

    for (var i = 0; i < a1.length; i++) {
        for (var j = 0; j < a2.length; j++) {

            var Index = i + j;
            var tt = 0;
            if (Index >= result.length) tt = 0;else tt = result[Index];
            result[Index] = a1[i] * a2[j] + (Index >= result.length ? 0 : result[Index]);

            if (result[Index] > 9) {
                var t = 0;
                if (Index + 1 >= result.length) t = 0;else {
                    t = result[Index + 1];
                }
                result[Index + 1] = ((result[Index] / 10)| 0) + t;
                result[Index] -= ((result[Index] / 10)| 0) * 10;
            }
        }
    }
    return (result.reverse().join(""));
};