function coffeeMachine(input) {
    let drinkType = input[0];
    let sugarType = input[1];
    let drinksCount = Number(input[2]);

    let drinkPrice = 0;


    switch (drinkType) {
        case "Espresso":
            if (sugarType === "Without") {
                drinkPrice = 0.90;
            } else if (sugarType === "Normal") {
                drinkPrice = 1;
            } else if (sugarType === "Extra") {
                drinkPrice = 1.20;
            }
            break;
        case "Cappuccino":
            if (sugarType === "Without") {
                drinkPrice = 1;
            } else if (sugarType === "Normal") {
                drinkPrice = 1.20;
            } else if (sugarType === "Extra") {
                drinkPrice = 1.60;
            }
            break;
        case "Tea":
            if (sugarType === "Without") {
                drinkPrice = 0.50;
            } else if (sugarType === "Normal") {
                drinkPrice = 0.60;
            } else if (sugarType === "Extra") {
                drinkPrice = 0.70;
            }
            break;
    }

    let drinksMoney = drinksCount * drinkPrice;

    if (sugarType === "Without") {
        drinksMoney = drinksMoney * 0.65;
    }

    if (drinkType === "Espresso" && drinksCount >= 5) {
        drinksMoney = drinksMoney * 0.75;
    }

    if (drinksMoney > 15) {
        drinksMoney = drinksMoney * 0.80;
    }

    console.log(`You bought ${drinksCount} cups of ${drinkType} for ${drinksMoney.toFixed(2)} lv.`);


}

coffeeMachine(["Espresso", "Without", "10"]);