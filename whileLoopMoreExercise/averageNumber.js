function averageNumber(input) {
    let number = Number(input[0]);

    let index = 1;
    let command = Number(input[index]);
    let sumOfNumbers = 0;

    while (index <= number) {
        sumOfNumbers += command;
        command = Number(input[++index]);
    }

    let average = sumOfNumbers / number;

    console.log(average);

}
averageNumber([
    "4",
    "3",
    "2",
    "4",
    "2"
]);