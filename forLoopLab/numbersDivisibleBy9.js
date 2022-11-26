function numbersDivisibleBy9(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);

    let sum = 0;
    let outputNumbers = "";

    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
            outputNumbers += i + "\n";
        }

    }
    console.log(`The sum: ${sum}`);
    console.log(outputNumbers);

}
numbersDivisibleBy9(["100", "200"]);