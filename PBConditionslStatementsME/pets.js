function pets(input) {
    let daysCount = Number(input[0]);
    let foodKg = Number(input[1]);
    let dogFoodDayKg = Number(input[2]);
    let catFoodDayKg = Number(input[3]);
    let turtleFoodDayGr = Number(input[4]);

    let turtleFoodDayKg = turtleFoodDayGr / 1000;

    let neededFood = (dogFoodDayKg + catFoodDayKg + turtleFoodDayKg) * daysCount;

    let food = Math.abs(foodKg - neededFood);

    if (foodKg >= neededFood) {
        console.log(`${Math.floor(food)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(food)} more kilos of food are needed.`);
    }

}

pets(["2", "10", "1", "1", "1200"]);