function computerFirm(input) {

    let computersCount = Number(input[0]);

    let totalSales = 0;
    let sumOfRatings = 0;

    for (let i = 1; i <= computersCount; i++) {
        let computer = input[i];
        let rating = Number(computer[computer.length - 1]);
        let possibleSales = 0;
        sumOfRatings += rating;
        if (computer.length >= 3) {
            possibleSales = Number(computer[0] + computer[1]);
        } else {
            possibleSales = Number(computer[0]);
        }

        if (rating === 2) {
            totalSales += 0;
        } else if (rating === 3) {
            totalSales += possibleSales / 2;
        } else if (rating === 4) {
            totalSales += possibleSales * 0.70;
        } else if (rating === 5) {
            totalSales += possibleSales * 0.85;
        } else if (rating === 6) {
            totalSales += possibleSales;
        }

    }

    let averageRating = sumOfRatings / computersCount;
    console.log(totalSales.toFixed(2));
    console.log(averageRating.toFixed(2));

}
computerFirm([
    "3",
    "103",
    "103",
    "103"
]);