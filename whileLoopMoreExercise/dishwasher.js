function dishwasher(input) {

    let detergentBottles = Number(input[0]);
    let detergentMg = detergentBottles * 750;
    let washedDishes = 0;
    let washedPots = 0;
    let index = 1;
    let command = input[index];

    while (command !== "End") {
        let utensils = Number(input[index]);

        if (detergentMg >= 0) {
            if (index % 3 === 0) {
                washedPots += utensils;
                detergentMg -= (utensils * 15);
            } else {
                washedDishes += utensils;
                detergentMg -= (utensils * 5);
            }
        } else {
            break;
        }
        command = input[++index];
    }

    if (detergentMg >= 0) {
        console.log("Detergent was enough!");
        console.log(`${washedDishes} dishes and ${washedPots} pots were washed.`);
        console.log(`Leftover detergent ${detergentMg} ml.`);
    } else {
        console.log(`Not enough detergent, ${Math.abs(detergentMg)} ml. more necessary!`);
    }

}
dishwasher([
    "1",
    "100",
    "51"
]);