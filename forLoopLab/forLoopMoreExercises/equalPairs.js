function equalPairs(input) {
    let pairsCount = Number(input[0]);

    let value = 0;
    let maxDiff = 0;
    let secondValue = 0;
    let firsValue = 0;
    let firstDiff = 0;
    let secondDiff = 0;

    for (i = 1; i < input.length; i += 2) {
        firsValue = Number(input[i]) + Number(input[i + 1]);
        secondValue = Number(input[i + 2]) + Number([input[i + 3]]);
        if (pairsCount > 1) {
            if (firsValue === secondValue) {
                value = firsValue;

            } else if (firsValue != secondValue) {
                firstDiff = Math.abs(firsValue - secondValue);
                secondDiff = Math.abs(secondValue - firsValue);

                if (firstDiff > secondDiff) {
                    maxDiff = firstDiff;
                } else if (secondDiff > firstDiff) {
                    maxDiff = secondDiff;
                } else if (firstDiff == secondDiff) {
                    maxDiff = firstDiff;
                }

            }
        } else {
            value = firsValue;
            break;
        }
    }

    if (maxDiff === 0) {
        console.log(`Yes, value=${value}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }


}

equalPairs(["1", "5", "5"]);