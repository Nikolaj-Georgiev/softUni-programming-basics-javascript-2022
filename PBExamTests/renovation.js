function renovation(input) {
    let wallHigh = Number(input[0]);
    let wallLength = Number(input[1]);
    let noPaintPercent = Number(input[2]);

    let totalWallsForPaint = 0;

    let wallSmForPaint = ((wallHigh * wallLength) * 4);
    let noPaintSm = noPaintPercent / 100;
    totalWallsForPaint = Math.ceil(wallSmForPaint - (wallSmForPaint * noPaintSm));
    let paintLeft = 0;
    let squareMeters = 0;

    for (let i = 3; i < input.length; i++) {
        let paint = input[i];
        if (paint !== "Tired!") {
            squareMeters += Number(paint);
        }
        if (paint === "Tired!") {
            if ((totalWallsForPaint - squareMeters) > 0) {
                paintLeft = Math.abs(totalWallsForPaint - squareMeters);
                console.log(`${paintLeft} quadratic m left.`);

            } else if ((totalWallsForPaint - squareMeters) < 0) {
                paintLeft = Math.abs(totalWallsForPaint - squareMeters);
                console.log(`All walls are painted and you have ${paintLeft} l paint left!`);

            } else if (totalWallsForPaint === squareMeters) {
                console.log("All walls are painted! Great job, Pesho!");
            }
            break;
        } else {
            if ((totalWallsForPaint - squareMeters) < 0) {
                paintLeft = Math.abs(totalWallsForPaint - squareMeters);
                console.log(`All walls are painted and you have ${paintLeft} l paint left!`);
                break;

            } else if (totalWallsForPaint === squareMeters) {
                console.log("All walls are painted! Great job, Pesho!");
                break;
            } else {

            }

        }

    }

}

renovation(["2", "3", "25", "6", "7", "8"]);