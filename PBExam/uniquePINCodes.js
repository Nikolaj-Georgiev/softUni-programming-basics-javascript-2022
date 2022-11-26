function uniquePINCodes(input) {

    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let thirdNumber = Number(input[2]);

    let PIN = '';

    for (let i = 1; i <= firstNumber; i++) {
        if (i % 2 === 0) {
            for (let j = 1; j <= secondNumber; j++) {
                if (j >= 2 && j <= 7 && j) {
                    if (j % 2 !== 0 || j == 2) {
                        for (let k = 1; k <= thirdNumber; k++) {
                            if (k % 2 === 0) {
                                PIN = `${i} ${j} ${k}`;
                                console.log(PIN);
                            }
                        }
                    }

                }

            }
        }

    }

}
uniquePINCodes([
    "3",
    "5",
    "5"
]);