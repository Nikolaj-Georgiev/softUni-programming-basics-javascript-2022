function maxNumber(input) {
    let max = Number.MIN_SAFE_INTEGER;
    index = 0;
    let holder = input[index];

    while (holder !== "Stop") {
        let number = Number(holder);
        if (max < number) {
            max = number;
        }
        index++;
        holder = input[index];
    }

    console.log(max);

}
maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"
]);