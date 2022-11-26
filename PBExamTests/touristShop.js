function touristShop(input) {
    let budget = Number(input[0]);

    let products = 0;
    let sumOfProducts = 0;
    let productPrice = 0;
    let moneyLeft = budget;

    for (let i = 1; i < input.length; i += 2) {
        let local = input[i];
        if (local === "Stop") {
            console.log(`You bought ${products} products for ${sumOfProducts.toFixed(2)} leva.`);
            break;
        }


        if ((i + 1) % 3 === 0 && (i + 1) !== 3) {
            productPrice = Number(input[i + 1]);
            productPrice = productPrice / 2;
            if (moneyLeft >= productPrice) {
                sumOfProducts += productPrice;
                moneyLeft -= productPrice;
                if (moneyLeft == 0) {
                    console.log(`You bought ${products} products for ${sumOfProducts.toFixed(2)} leva.`);
                    break;

                } else if (i == input.length - 2 && budget >= sumOfProducts) {
                    products++;
                    console.log(`You bought ${products} products for ${sumOfProducts.toFixed(2)} leva.`);
                    break;
                }
            } else if (moneyLeft < productPrice) {
                console.log(`You don't have enough money!`);
                console.log(`You need ${Math.abs(moneyLeft - productPrice).toFixed(2)} leva!`);
                break;
            }
            products++;
        } else {
            productPrice = Number(input[i + 1]);
            if (moneyLeft >= productPrice) {
                sumOfProducts += productPrice;
                moneyLeft -= productPrice;
                if (moneyLeft == 0) {
                    console.log(`You bought ${products} products for ${sumOfProducts.toFixed(2)} leva.`);
                    break;

                } else if (i == input.length - 2 && budget >= sumOfProducts) {
                    products++;
                    console.log(`You bought ${products} products for ${sumOfProducts.toFixed(2)} leva.`);

                    break;
                }
            } else if (moneyLeft < productPrice) {
                console.log(`You don't have enough money!`);
                console.log(`You need ${Math.abs(moneyLeft - productPrice).toFixed(2)} leva!`);
                break;
            }
            products++;
        }

    }

}




touristShop(["10054",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "30",
    "Sunscreen",
    "30",
    "Sunscreen",
    "30",
    "Sunscreen",
    "30",
    "Sunscreen",
    "30",
]);