function backToThePast(input) {
    let heritageSum = Number(input[0]);
    let yearToLeaveTo = Number(input[1]);

    let spendMoney = 0;
    let ageCounter = 0

    for (let i = 1800; i <= yearToLeaveTo; i++) {
        if (i % 2 === 0) {
            ageCounter++;
            spendMoney += 12000;
        } else if (i % 2 !== 0) {

            spendMoney += 12000 + (50 * (18 + ageCounter++));
        }
    }

    let money = Math.abs(heritageSum - spendMoney);

    if (heritageSum >= spendMoney) {
        console.log(`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    } else if (heritageSum < spendMoney) {
        console.log(`He will need ${money.toFixed(2)} dollars to survive.`);
    }

}

backToThePast(["50000", "1802"]);