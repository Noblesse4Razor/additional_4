module.exports = function multiply(first, second) {
    var a1 = first.split('').reverse();
    var a2 = second.split('').reverse();
    var result = [];

    for (var i = 0; i < a1.length; i++) {
        for (var j = 0; j < a2.length; j++) {

            var Index = i + j;
            if (!result[Index]) result[Index] = 0;

            result[Index] += a1[i] * a2[j] ;

            for (var k = 0; k < result.length; k++) {
                if (result[k] >= 10) {
                    if (!result[k + 1]) {
                        result[k + 1] = 0;
                    }

                    result[k + 1] += Number.parseInt(result[k] / 10);
                    result[k] %= 10;
                }
            }
        }
    }
    return (result.reverse().join(""));
};
