function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];

    let sumOfAllPrime = 0;
    let sumOfAllNonPrime = 0;


    while (command !== "stop") {
        let number = Number(command);

        if (number < 0) {
            console.log("Number is negative.");
            index++;
            command = input[index];
            continue;
        }

        let counter = 0;
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                counter++;
            }
        }
        if (counter > 1) {
            sumOfAllNonPrime += number;
        } else {
            sumOfAllPrime += number;
        }

        index++;
        command = input[index];

    }
    console.log(`Sum of all prime numbers is: ${sumOfAllPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumOfAllNonPrime}`);

}
sumPrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"
]);