module.exports = function multiply(first, second) {


    var a1 = first.split("").reverse();
    var a2 = second.toString().split("").reverse();
    var aResult = [];

    for (let iterNum1 = 0; iterNum1 < a1.length; iterNum1++) {
        for (let iterNum2 = 0; iterNum2 < a2.length; iterNum2++) {
            var idxIter = iterNum1 + iterNum2;
            aResult[idxIter] = a1[iterNum1] * a2[iterNum2] + ( idxIter >= aResult.length ? 0 : aResult[idxIter] );

            if (aResult[idxIter] > 9) {
                aResult[idxIter + 1] = Math.floor(aResult[idxIter] / 10) + ( idxIter + 1 >= aResult.length ? 0 : aResult[idxIter + 1] );
                aResult[idxIter] -= Math.floor(aResult[idxIter] / 10) * 10;
            }
        }
    }
    return aResult.reverse().join("");;
}
