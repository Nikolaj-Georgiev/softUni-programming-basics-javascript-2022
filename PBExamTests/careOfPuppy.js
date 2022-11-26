function careOfPuppy(input) {

    let foodKg = Number(input[0]);
    let foodGrams = foodKg * 1000;
    let eatenFood = 0;
    let index = 1;
    let command = input[index];

    while (command !== "Adopted") {
        eatenFood += Number(input[index]);
        command = input[++index];
    }
    let food = foodGrams - eatenFood;

    if (food >= 0) {
        console.log(`Food is enough! Leftovers: ${Math.abs(food)} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(food)} grams more.`)
    }


}
careOfPuppy(["3",
    "1000",
    "1000",
    "1000",
    "Adopted"
]);