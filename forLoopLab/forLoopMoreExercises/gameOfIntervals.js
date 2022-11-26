function gameOfIntervals(input) {
    let movesCount = Number(input[0]);

    let result = 0;
    let numbers0To9 = 0;
    let numbers10To19 = 0;
    let numbers20To29 = 0;
    let numbers30To39 = 0;
    let numbers40to50 = 0;
    let numbersNegativeOrOver50 = 0;

    for (i = 1; i <= movesCount; i++) {
        let counter = Number(input[i]);
        if (counter >= 0 && counter <= 9) {
            numbers0To9++;
            result += counter * 0.2;
        } else if (counter <= 19 && counter > 0) {
            numbers10To19++;
            result += counter * 0.3;
        } else if (counter <= 29 && counter > 0) {
            numbers20To29++;
            result += counter * 0.4;
        } else if (counter <= 39 && counter > 0) {
            numbers30To39++;
            result += 50;
        } else if (counter <= 50 && counter > 0) {
            numbers40to50++;
            result += 100;
        } else if (counter < 0 || counter > 50) {
            numbersNegativeOrOver50++;
            result = result / 2;
        }
    }

    let numbers0To9Percent = (numbers0To9 / movesCount) * 100;
    let numbers10To19Percent = (numbers10To19 / movesCount) * 100;
    let numbers20To29Percent = (numbers20To29 / movesCount) * 100;
    let numbers30To39Percent = (numbers30To39 / movesCount) * 100;
    let numbers40to50Percent = (numbers40to50 / movesCount) * 100;
    let numbersNegativeOrOver50Percent = (numbersNegativeOrOver50 / movesCount) * 100;

    console.log(`${result.toFixed(2)}`);
    console.log(`From 0 to 9: ${numbers0To9Percent.toFixed(2)}%`);
    console.log(`From 10 to 19: ${numbers10To19Percent.toFixed(2)}%`);
    console.log(`From 20 to 29: ${numbers20To29Percent.toFixed(2)}%`);
    console.log(`From 30 to 39: ${numbers30To39Percent.toFixed(2)}%`);
    console.log(`From 40 to 50: ${numbers40to50Percent.toFixed(2)}%`);
    console.log(`Invalid numbers: ${numbersNegativeOrOver50Percent.toFixed(2)}%`);

}

gameOfIntervals(["10",
    "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"
]);