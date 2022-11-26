function foodForPets(input) {
    let daysCount = Number(input[0]);
    let totalFood = Number(input[1]);

    let totalEatenFoodByDog = 0;
    let totalEatenFoodByCat = 0;
    let eatenBiscuits = 0;
    let index = 2;

    for (let i = 1; i <= daysCount; i++) {

        let dogFood = Number(input[index]);
        let catFood = Number(input[++index]);
        index++;
        if (i % 3 === 0) {
            eatenBiscuits += (dogFood + catFood) * 0.1;
        }
        totalEatenFoodByCat += catFood;
        totalEatenFoodByDog += dogFood;

    }
    let totalEatenFood = totalEatenFoodByCat + totalEatenFoodByDog;

    console.log(`Total eaten biscuits: ${Math.round(eatenBiscuits)}gr.`);
    console.log(`${((totalEatenFood / totalFood) * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((totalEatenFoodByDog / totalEatenFood) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((totalEatenFoodByCat / totalEatenFood) * 100).toFixed(2)}% eaten from the cat.`);
}
foodForPets(["3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"
]);