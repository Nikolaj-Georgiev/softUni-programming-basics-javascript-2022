function touristShopTwo(input) {
    let budget = Number(input[0]);
    let index = 1;
    let command = input[index];
    let productsSum = 0;
    let productsCount = 0;


    while (command !== "Stop") {

        index++;
        let price = Number(input[index]);

        if (index % 3 === 0 && index !== 3) {
            price = price / 2;
        }
        budget -= price;
        productsCount++;
        productsSum += price;

        if (budget < 0) {

            break;
        }

        index++;
        command = input[index];

    }
    if (budget < 0) {
        console.log("You don't have enough money!");
        console.log(`You need ${Math.abs(budget).toFixed(2)} leva!`);

    } else {
        console.log(`You bought ${productsCount} products for ${productsSum.toFixed(2)} leva.`);
    }

}
touristShopTwo(["54",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "45"
]);