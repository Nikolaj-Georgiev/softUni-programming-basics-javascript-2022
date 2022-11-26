function series(input) {
    let budget = Number(input[0]);
    let seriesCount = Number(input[1]);
    let totalPrice = 0;

    for (let i = 2; i < input.length; i++) {
        let seriesName = input[i];
        i++
        let seriesPrice = Number(input[i]);

        switch (seriesName) {
            case "Thrones":
                seriesPrice = seriesPrice * 0.5;
                break;
            case "Lucifer":
                seriesPrice = seriesPrice * 0.6;
                break;
            case "Protector":
                seriesPrice = seriesPrice * 0.7;
                break;
            case "TotalDrama":
                seriesPrice = seriesPrice * 0.8;
                break;
            case "Area":
                seriesPrice = seriesPrice * 0.9;
                break;
            default:
                break;
        }
        totalPrice += seriesPrice;
    }

    if (budget >= totalPrice) {
        console.log(`You bought all the series and left with ${(budget - totalPrice).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(totalPrice - budget).toFixed(2)} lv. more to buy the series!`)
    }

}
series(["15",
    "3",
    "Protector",
    "8",
    "TotalDrama",
    "6",
    "Area",
    "5"
]);