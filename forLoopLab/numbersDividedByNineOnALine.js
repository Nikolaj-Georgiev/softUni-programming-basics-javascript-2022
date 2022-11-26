function numbersDividedByNineOnALine(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);

    let sum = 0;
    let outputNumbers = "";

    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
            outputNumbers += (i + " ");
        }

    }
    console.log(`The sum: ${sum}`);
    console.log(outputNumbers.trim());

}
numbersDividedByNineOnALine(["100", "200"]);

function numbersDividedByNineOnALine2(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);

    let sum = 0;
    let outputNumbers = "";

    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
            outputNumbers += i;
            if ((i + 9) <= end) {
                outputNumbers += " ";
            }
        }

    }
    console.log(`The sum: ${sum}`);
    console.log(outputNumbers.trim());

}
numbersDividedByNineOnALine2(["100", "200"]);