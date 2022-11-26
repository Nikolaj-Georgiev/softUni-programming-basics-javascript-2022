function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let carClass = 0;
    let carType = 0;
    let carPrice = 0;

    if (budget <= 100) {
        carClass = "Economy class";
        if (season === "Summer") {
            carType = "Cabrio";
            carPrice = budget * 0.35;
        } else if (season === "Winter") {
            carType = "Jeep";
            carPrice = budget * 0.65;

        }

    } else if (100 < budget && budget <= 500) {
        carClass = "Compact class";
        if (season === "Summer") {
            carType = "Cabrio";
            carPrice = budget * 0.45;
        } else if (season === "Winter") {
            carType = "Jeep";
            carPrice = budget * 0.80;

        }

    } else if (budget > 500) {
        carClass = "Luxury class";
        carType = "Jeep";
        carPrice = budget * 0.90;

    }

    console.log(`${carClass}`);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);

}

carToGo(["1010", "Winter"]);