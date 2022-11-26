function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);

    let boatPrice = 0;

    switch (season) {
        case "Spring":
            boatPrice = 3000;
            break;
        case "Summer":
        case "Autumn":
            boatPrice = 4200;
            break;
        case "Winter":
            boatPrice = 2600;
            break;
        default:
            console.log("invalid season");
            break;
    }

    if (fishermanCount <= 6) {
        if (fishermanCount % 2 === 0 && season != "Autumn") {
            boatPrice = boatPrice * 0.9;
            boatPrice = boatPrice * 0.95;
        } else {
            boatPrice = boatPrice * 0.9;
        }
    } else if (fishermanCount >= 7 && fishermanCount <= 11) {
        if (fishermanCount % 2 === 0 && season != "Autumn") {
            boatPrice = boatPrice * 0.85;
            boatPrice = boatPrice * 0.95;
        } else {
            boatPrice = boatPrice * 0.85;
        }
    } else {
        if (fishermanCount % 2 === 0 && season != "Autumn") {
            boatPrice = boatPrice * 0.75;
            boatPrice = boatPrice * 0.95;
        } else {
            boatPrice = boatPrice * 0.75;
        }
    }

    let money = Math.abs(budget - boatPrice);

    if (budget >= boatPrice) {
        console.log(`Yes! You have ${money.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${money.toFixed(2)} leva.`);
    }

}

fishingBoat(["2000", "Autumn", "12"]);