function sumNumbers(input) {
    let number = Number(input[0]);

    let index = 1;
    let holder = Number(input[index]);
    let sum = 0;

    while (sum < number) {
        sum += holder;
        index++;
        holder = Number(input[index]);
    }

    console.log(sum);

}
sumNumbers(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"
]);