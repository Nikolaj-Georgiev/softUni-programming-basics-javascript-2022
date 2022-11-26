function minNumber(input) {
    let min = Number.MAX_SAFE_INTEGER;
    let index = 0;
    let command = input[index];
    let number = Number(command);

    while (command !== "Stop") {
        if (min > number) {
            min = number;
        }
        index++;
        command = input[index];
        number = Number(command);
    }

    console.log(min);
}
minNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"
]);