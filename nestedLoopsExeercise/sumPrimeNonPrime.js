function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];

    let sumOfAllPrime = 0;
    let sumOfAllNonPrime = 0;


    while (command !== "stop") {
        let number = Number(command);

        if (number < -2147483648 || number > 2147483648) {

            index++;
            command = input[index];
            continue;
        }

        if (number < 0) {
            console.log("Number is negative.");
            index++;
            command = input[index];
            continue;
        }
        if (number === 0) {
            sumOfAllNonPrime += number;
            index++;
            command = input[index];
            continue;
        }
        if (number === 1) {
            sumOfAllNonPrime += number;
            index++;
            command = input[index];
            continue;
        }
        if (number === 3) {
            sumOfAllPrime += number;
            index++;
            command = input[index];
            continue;
        }

        if (number % 2 !== 0 && number % 3 !== 0 && number % 8 !== 0) {
            sumOfAllPrime += number;
        } else {
            sumOfAllNonPrime += number;
        }


        index++;
        command = input[index];

    }
    console.log(`Sum of all prime numbers is: ${sumOfAllPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumOfAllNonPrime}`);

}
sumPrimeNonPrime(["0",
    "-9",
    "0",
    "stop"
]);