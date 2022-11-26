function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let rosesPrice = 5;
    let dahliasPrice = 3.80;
    let tulipsPrice = 2.80;
    let narcissusPrice = 3;
    let gladiolusPrice = 2.50;

    let totalSum = 0;

    if (flowerType === "Roses") {
        if (flowerCount > 80) {
            totalSum = (flowerCount * rosesPrice) * 0.9;
        } else if (flowerCount <= 80) {
            totalSum = flowerCount * rosesPrice;
        }
    } else if (flowerType === "Dahlias") {
        if (flowerCount > 90) {
            totalSum = (flowerCount * dahliasPrice) * 0.85;
        } else if (flowerCount <= 90) {
            totalSum = flowerCount * dahliasPrice;
        }
    } else if (flowerType === "Tulips") {
        if (flowerCount > 80) {
            totalSum = (flowerCount * tulipsPrice) * 0.85;
        } else if (flowerCount <= 80) {
            totalSum = flowerCount * tulipsPrice;
        }
    } else if (flowerType === "Narcissus") {
        if (flowerCount < 120) {
            totalSum = flowerCount * (narcissusPrice * 1.15);
        } else if (flowerCount >= 120) {
            totalSum = flowerCount * narcissusPrice;
        }
    } else if (flowerType === "Gladiolus") {
        if (flowerCount < 80) {
            totalSum = flowerCount * (gladiolusPrice * 1.20);
        } else if (flowerCount >= 80) {
            totalSum = flowerCount * gladiolusPrice;
        }
    }

    let money = Math.abs(budget - totalSum);

    if (budget >= totalSum) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${money.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${money.toFixed(2)} leva more.`);
    }


}

newHouse(["Tulips", "88", "260"]);