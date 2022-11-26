function divisionWithoutRemainder(input) {
    let n = Number(input[0]);
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;

    for (let i = 1; i < input.length; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber % 4 === 0) {
            p4++;
            if (currentNumber % 2 === 0) {
                p2++;
            }
            if (currentNumber % 3 === 0) {
                p3++;
            }

        } else if (currentNumber % 3 === 0) {
            p3++;
            if (currentNumber % 2 === 0) {
                p2++;
            }

        } else if (currentNumber % 2 === 0) {
            p2++;

        }
    }
    console.log((p2 / n * 100).toFixed(2) + "%");
    console.log((p3 / n * 100).toFixed(2) + "%");
    console.log((p4 / n * 100).toFixed(2) + "%");

}
divisionWithoutRemainder(["3",
    "3",
    "6",
    "9"
]);