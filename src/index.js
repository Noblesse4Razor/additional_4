"use strict";

module.exports = function multiply(first, second) {
    var a1 = first.split("").reverse();
    var a2 = second.toString().split("").reverse();
    var result = [];

    for (var i = 0; i < a1.length; i++) {
        for (var j = 0; j < a2.length; j++) {

            var idxIter = i + j;
            var tt = 0;
            if (idxIter >= result.length) tt = 0;else tt = result[idxIter];
            result[idxIter] = a1[i] * a2[j] + (idxIter >= result.length ? 0 : result[idxIter]);

            if (result[idxIter] > 9) {
                var t = 0;
                if (idxIter + 1 >= result.length) t = 0;else {
                    t = result[idxIter + 1];
                }
                result[idxIter + 1] = ((result[idxIter] / 10)| 0) + t;
                result[idxIter] -= ((result[idxIter] / 10)| 0) * 10;
            }
        }
    }
    return (result.reverse().join(""));
};