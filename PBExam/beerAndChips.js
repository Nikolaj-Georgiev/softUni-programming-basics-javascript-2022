function beerAndChips(input) {

    let footballFan = input[0];
    let budget = Number(input[1]);
    let beersCount = Number(input[2]);
    let chipsCount = Number(input[3]);

    let beerMoney = beersCount * 1.20;
    let chipsPrice = beerMoney * 0.45;
    let chipsMoney = Math.ceil(chipsPrice * chipsCount);

    let totalSpendMoney = beerMoney + chipsMoney;

    if (budget >= totalSpendMoney) {
        console.log(`${footballFan} bought a snack and has ${(budget - totalSpendMoney).toFixed(2)} leva left.`);
    } else {
        console.log(`${footballFan} needs ${(totalSpendMoney - budget).toFixed(2)} more leva!`);
    }

}
beerAndChips(["George",
    "10",
    "2",
    "3"
]);