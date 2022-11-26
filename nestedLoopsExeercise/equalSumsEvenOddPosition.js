function equalSumsEvenOddPosition(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);

    let counter = 0;
    let resultString = '';

    for (let i = firstNumber; i <= secondNumber; i++) {
        let tempNumber = i;
        let checker = tempNumber.toString().length;
        let evenSum = 0;
        let oddSum = 0;
        for (let j = 0; j < checker; j++) {
            counter++;
            tempNumber = String(tempNumber);
            let localNumber = Number(tempNumber[j]);
            if (counter % 2 === 0) {
                evenSum += localNumber;

            } else {
                oddSum += localNumber;
            }

        }
        if (evenSum === oddSum) {
            resultString += tempNumber + " ";
        }
    }
    console.log(resultString);

}
equalSumsEvenOddPosition(["123456",
    "124000"
]);