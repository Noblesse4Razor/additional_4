
"use strict";
module.exports = function multiply(first, second) {


        var a1 = first.split("").reverse();
        var a2 = second.toString().split("").reverse();
        var aResult = [];
        var iterNum1 = 0;
        var iterNum2 = 0;
        var idxIter = 0;
        var tt = 0;
        var t =0;

        for (iterNum1 = 0; iterNum1 < a1.length; iterNum1+= 1) {
            for (iterNum2 = 0; iterNum2 < a2.length; iterNum2+= 1) {

                idxIter = iterNum1 + iterNum2;
                tt= 0;
                if(idxIter >= aResult.length){ tt= 0;}
                else {tt=aResult[idxIter];}
                aResult[idxIter] = a1[iterNum1] * a2[iterNum2] + ( idxIter >= aResult.length ? 0 : aResult[idxIter] );

                if (aResult[idxIter] > 9) {
                    t =0;
                    if  (idxIter + 1 >= aResult.length) {t=0;}
                    else {
                        t = aResult[idxIter + 1];
                    }
                    aResult[idxIter + 1] = Math.floor(aResult[idxIter] / 10) + t;
                    aResult[idxIter] -= Math.floor(aResult[idxIter] / 10) * 10;
                }
            }
        }
        return aResult.reverse().join("");
    }
