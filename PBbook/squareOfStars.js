function squareOfStars(input) {
    let lines = Number(input[0]);

    for (let i = 1; i <= lines; i++) {
        let printedStars = '';
        if (i === 1 || i === lines) {
            for (let j = 1; j <= lines; j++) {
                printedStars += "*";
            }
        } else {
            for (let k = 1; k <= lines; k++) {
                if (k === 1 || k === lines) {
                    printedStars += "*";
                } else {
                    printedStars += " ";
                }
            }
        }
        console.log(printedStars);
    }

}
squareOfStars([10]);