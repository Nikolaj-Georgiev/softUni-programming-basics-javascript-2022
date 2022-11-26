function truckDriver(input) {
    let season = input[0];
    let monthlyKm = Number(input[1]);

    let seasonLength = 4;
    let priceKm = 0;
    let taxation = 0.90;

    if (monthlyKm <= 5000) {
        if (season === "Spring" || season === "Autumn") {
            priceKm = 0.75;
        } else if (season === "Summer") {
            priceKm = 0.90;
        } else if (season === "Winter") {
            priceKm = 1.05;
        }
    } else if (5000 < monthlyKm && monthlyKm <= 10000) {
        if (season === "Spring" || season === "Autumn") {
            priceKm = 0.95;
        } else if (season === "Summer") {
            priceKm = 1.10;
        } else if (season === "Winter") {
            priceKm = 1.25;
        }
    } else if (10000 < monthlyKm <= 20000) {
        priceKm = 1.45;

    }

    let money = ((monthlyKm * priceKm) * seasonLength) * taxation;

    console.log(money.toFixed(2));

}

truckDriver(["Summer", "3455"]);