function petShop(input){
    let dogFoodPacks = Number(input[0]);
    let catFoodPacks = Number(input[1]);

    //"{крайната сума} lv."

    let priceDogFood = 2.50;
    let priceCatFood = 4;

    let totalDogFood = dogFoodPacks * priceDogFood;
    let totalCatFood = catFoodPacks * priceCatFood;

    let finalSum = totalDogFood + totalCatFood;

    console.log(`${finalSum} lv.`);

}
petShop(["13", "9"]);