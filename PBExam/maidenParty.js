function maidenParty(input) {

    let maidenPartyPrice = Number(input[0]);
    let loveLettersCount = Number(input[1]);
    let waxRosesCount = Number(input[2]);
    let keyHoldersCount = Number(input[3]);
    let cartoonsCount = Number(input[4]);
    let luckSurprisesCount = Number(input[5]);

    let totalOrderedProducts = loveLettersCount + waxRosesCount + keyHoldersCount + cartoonsCount + luckSurprisesCount;

    let loveLettersIncome = loveLettersCount * 0.60;
    let waxRosesIncome = waxRosesCount * 7.20;
    let keyHoldersIncome = keyHoldersCount * 3.60;
    let cartoonsIncome = cartoonsCount * 18.20;
    let luckSurprisesIncome = luckSurprisesCount * 22;

    let totalIncome = loveLettersIncome + waxRosesIncome + keyHoldersIncome + cartoonsIncome + luckSurprisesIncome;

    isDiscounted = totalOrderedProducts >= 25;

    if (isDiscounted) {
        totalIncome = totalIncome * 0.65;
    }

    let hostingTax = totalIncome * 0.10;

    let finalProfit = totalIncome - hostingTax;

    isEnoughMoney = finalProfit >= maidenPartyPrice;

    if (isEnoughMoney) {
        console.log(`Yes! ${(finalProfit - maidenPartyPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(maidenPartyPrice - finalProfit).toFixed(2)} lv needed.`);
    }

}
maidenParty([
    "40.8",
    "20",
    "25",
    "30",
    "50",
    "10"
]);