function oddOrEvenPosition(input) {

    let numbersCount = Number(input[0]);

    let maxOdd = -1000000000.0;
    let minOdd = 1000000000.0;
    let maxEven = -1000000000.0;
    let minEven = 1000000000.0;


    let oddSum = 0;
    let evenSum = 0;
    let index = 0;
    let number = 0;

    for (let odd = 1; odd <= numbersCount; odd += 2) {
        index = odd;

        number = Number(input[index]);
        if (number < 1000000000.0 && number > -1000000000.0) {
            oddSum += number;
            if (number > maxOdd) {
                maxOdd = number;
            }
            if (number < minOdd) {
                minOdd = number;
            }
        } else {
            minOdd = "No";
            maxOdd = "No";
        }
    }

    for (let even = 2; even <= numbersCount; even += 2) {
        index = even;

        number = Number(input[index]);
        if (number < 1000000000.0 && number > -1000000000.0) {
            evenSum += number;
            if (number > maxEven) {
                maxEven = number;
            }
            if (number < minEven) {
                minEven = number;
            }
        } else {
            minEven = "No";
            maxEven = "No";
        }


    }



    console.log(`OddSum=${oddSum.toFixed(2)},`);

    if (minOdd === 1000000000.0) {
        minOdd = "No";
        console.log(`OddMin=${minOdd},`);
    } else if (minOdd !== 1000000000.0) {
        console.log(`OddMin=${minOdd.toFixed(2)},`);
    }

    if (maxOdd === -1000000000.0) {
        maxOdd = "No";
        console.log(`OddMax=${maxOdd},`);
    } else if (maxOdd !== -1000000000.0) {
        console.log(`OddMax=${maxOdd.toFixed(2)},`);
    }

    console.log(`EvenSum=${evenSum.toFixed(2)},`);

    if (minEven === 1000000000.0) {
        minEven = "No";
        console.log(`EvenMin=${minEven},`);
    } else if (minEven !== 1000000000.0) {
        console.log(`EvenMin=${minEven.toFixed(2)},`);
    }

    if (maxEven === -1000000000.0) {
        maxEven = "No";
        console.log(`EvenMax=${maxEven}`);
    } else if (maxEven !== -1000000000.0) {
        console.log(`EvenMax=${maxEven.toFixed(2)}`);
    }


}
oddOrEvenPosition(["1",
    "1"
]);