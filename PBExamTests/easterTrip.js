function easterTrip(input) {
    let destination = input[0];
    let period = input[1];
    let nightsCount = Number(input[2]);

    let nightsPrice = 0;
    let totalPrice = 0;

    switch (destination) {
        case "France":
            switch (period) {
                case "21-23":
                    nightsPrice = 30;
                    totalPrice = nightsCount * nightsPrice;
                    console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
                    break;
                case "24-27":
                    nightsPrice = 35;
                    totalPrice = nightsCount * nightsPrice;
                    console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
                    break;
                case "28-31":
                    nightsPrice = 40;
                    totalPrice = nightsCount * nightsPrice;
                    console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
                    break;
            }
            break;
        case "Italy":
            switch (period) {
                case "21-23":
                    nightsPrice = 28;
                    totalPrice = nightsCount * nightsPrice;
                    console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
                    break;
                case "24-27":
                    nightsPrice = 32;
                    totalPrice = nightsCount * nightsPrice;
                    console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
                    break;
                case "28-31":
                    nightsPrice = 39;
                    totalPrice = nightsCount * nightsPrice;
                    console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
                    break;
            }
            break;
        case "Germany":
            switch (period) {
                case "21-23":
                    nightsPrice = 32;
                    totalPrice = nightsCount * nightsPrice;
                    console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
                    break;
                case "24-27":
                    nightsPrice = 37;
                    totalPrice = nightsCount * nightsPrice;
                    console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
                    break;
                case "28-31":
                    nightsPrice = 43;
                    totalPrice = nightsCount * nightsPrice;
                    console.log(`Easter trip to ${destination} : ${totalPrice.toFixed(2)} leva.`);
                    break;
            }
            break;
    }


}

easterTrip(["Germany", "24-27", "5"]);