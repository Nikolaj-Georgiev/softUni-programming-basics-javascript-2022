function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let location = 0;
    let accommodation = 0;
    let vacationPrice = 0;

    if (budget <= 1000) {
        accommodation = "Camp";
        if (season === "Summer") {
            location = "Alaska";
            vacationPrice = budget * 0.65;

        } else if (season === "Winter") {
            location = "Morocco";
            vacationPrice = budget * 0.45;
        }
    } else if (1000 < budget && budget <= 3000) {
        accommodation = "Hut";
        if (season === "Summer") {
            location = "Alaska";
            vacationPrice = budget * 0.80;

        } else if (season === "Winter") {
            location = "Morocco";
            vacationPrice = budget * 0.60;
        }
    } else if (budget > 3000) {
        accommodation = "Hotel";
        if (season === "Summer") {
            location = "Alaska";
            vacationPrice = budget * 0.90;

        } else if (season === "Winter") {
            location = "Morocco";
            vacationPrice = budget * 0.90;
        }
    }

    console.log(`${location} - ${accommodation} - ${vacationPrice.toFixed(2)}`);

}

vacation(["800", "Summer"]);