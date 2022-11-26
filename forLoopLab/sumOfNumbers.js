function sumOfNumbers(input) {
    let digitsText = String(input[0]);
    let sumOfDigits = 0;

    for (let i = 0; i < digitsText.length; i++) {
        let number = Number(digitsText[i]);
        sumOfDigits += number;

    }

    console.log(`The sum of the digits is:${sumOfDigits}`);

}

sumOfNumbers(["1234"]);