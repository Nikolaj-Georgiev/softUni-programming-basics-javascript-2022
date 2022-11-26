function flowerShop(input) {
    let magnoliaCount = Number(input[0]);
    let hyacinthCount = Number(input[1]);
    let roseCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let presentPrice = Number(input[4]);

    let magnoliaMoney = magnoliaCount * 3.25;
    let hyacinthMoney = hyacinthCount * 4;
    let roseMoney = roseCount * 3.50;
    let cactusMoney = cactusCount * 8;

    let flowersMoney = magnoliaMoney + hyacinthMoney + roseMoney + cactusMoney;
    let profitMoney = flowersMoney * 0.95;

    let money = Math.abs(presentPrice - profitMoney);

    if (profitMoney >= presentPrice) {
        console.log(`She is left with ${Math.floor(money)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(money)} leva.`);
    }
}

flowerShop(["15", "7", "5", "10", "100"]);