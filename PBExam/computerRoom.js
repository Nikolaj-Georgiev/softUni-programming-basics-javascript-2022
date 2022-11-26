function computerRoom(input) {

    let month = input[0];
    let hoursSpend = Number(input[1]);
    let peopleCount = Number(input[2]);
    let dayOrNight = input[3];

    let pricePerPerson = 0;
    let totalPrice = 0;

    switch (month) {
        case "march":
        case "april":
        case "may":
            switch (dayOrNight) {
                case "day":
                    pricePerPerson = 10.50;
                    break;
                case "night":
                    pricePerPerson = 8.40;
                    break;
            }
            break;
        case "june":
        case "july":
        case "august":
            switch (dayOrNight) {
                case "day":
                    pricePerPerson = 12.60;
                    break;
                case "night":
                    pricePerPerson = 10.20;
                    break;
            }
            break;

    }

    if (peopleCount >= 4) {
        pricePerPerson = pricePerPerson * 0.9;
    }
    if (hoursSpend >= 5) {
        pricePerPerson = pricePerPerson / 2;
    }

    totalPrice = (pricePerPerson * peopleCount) * hoursSpend;

    console.log(`Price per person for one hour: ${pricePerPerson.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);

}
computerRoom(["july",
    "5",
    "5",
    "night"
]);