function flowers(input) {
    let chrysanthemumsCount = Number(input[0]);
    let rosesCount = Number(input[1]);
    let tulipsCount = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;

    if (season == "Spring" || season == "Summer") {
        chrysanthemumsPrice = 2.00;
        rosesPrice = 4.10;
        tulipsPrice = 2.50;

    } else if (season === "Autumn" || season === "Winter") {
        chrysanthemumsPrice = 3.75;
        rosesPrice = 4.50;
        tulipsPrice = 4.15;
    }

    if (holiday === "Y"){
        chrysanthemumsPrice = chrysanthemumsPrice * 1.15;
        rosesPrice = rosesPrice * 1.15;
        tulipsPrice = tulipsPrice * 1.15;
    }

    let totalFlowerCount = chrysanthemumsCount + rosesCount + tulipsCount;

    let chrysanthemumsMoney = chrysanthemumsCount * chrysanthemumsPrice;
    let rosesMoney = rosesCount * rosesPrice;
    let tulipsMoney = tulipsCount * tulipsPrice;

    let unarrangedBouquetPrice = chrysanthemumsMoney + rosesMoney + tulipsMoney;

    if (tulipsCount > 7 && season === "Spring") {
        unarrangedBouquetPrice = unarrangedBouquetPrice * 0.95;
    }
    if (rosesCount >= 10 && season === "Winter") {
        unarrangedBouquetPrice = unarrangedBouquetPrice * 0.9;
    }
    if (totalFlowerCount > 20) {
        unarrangedBouquetPrice = unarrangedBouquetPrice * 0.8;
    }

    let finalBouquetPrice = unarrangedBouquetPrice + 2;

    console.log(finalBouquetPrice.toFixed(2));

}
flowers(["2", "4", "8", "Spring", "Y"]);