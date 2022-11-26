function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);

    let price = 0;

    if ((day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") && quantity != 0) {
        switch (fruit) {
            case "banana":
                price = 2.50;
                console.log((quantity * price).toFixed(2));
                break;
            case "apple":
                price = 1.20;
                console.log((quantity * price).toFixed(2));
                break;
            case "orange":
                price = 0.85;
                console.log((quantity * price).toFixed(2));
                break;
            case "grapefruit":
                price = 1.45;
                console.log((quantity * price).toFixed(2));
                break;
            case "kiwi":
                price = 2.70;
                console.log((quantity * price).toFixed(2));
                break;
            case "pineapple":
                price = 5.50;
                console.log((quantity * price).toFixed(2));
                break;
            case "grapes":
                price = 3.85;
                console.log((quantity * price).toFixed(2));
                break;
            default:
                console.log("error");
                break;

        }


    } else if ((day === "Saturday" || day === "Sunday") && quantity != 0) {
        switch (fruit) {
            case "banana":
                price = 2.70;
                console.log((quantity * price).toFixed(2));
                break;
            case "apple":
                price = 1.25;
                console.log((quantity * price).toFixed(2));
                break;
            case "orange":
                price = 0.90;
                console.log((quantity * price).toFixed(2));
                break;
            case "grapefruit":
                price = 1.60;
                console.log((quantity * price).toFixed(2));
                break;
            case "kiwi":
                price = 3.00;
                console.log((quantity * price).toFixed(2));
                break;
            case "pineapple":
                price = 5.60;
                console.log((quantity * price).toFixed(2));
                break;
            case "grapes":
                price = 4.20;
                console.log((quantity * price).toFixed(2));
                break;
            default:
                console.log("error");
                break;

        }


    } else {
        console.log("error");
    }

}

fruitShop(["grapefruit", "Saturday", "1.25"]);