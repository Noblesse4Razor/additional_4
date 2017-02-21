module.exports = function multiply(first, second) {
     first = first.split('').reverse();
     second = second.split('').reverse();
    let result = [];

    for (var i = 0; i < first.length; i++) {
        for (var j = 0; j < second.length; j++) {


            if (!result[i+j]) result[i+j] = 0;

            result[i+j] += first[i] * second[j] ;

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
