function club(input) {
    let desiredProfit = Number(input[0]);

    let income = 0;
    let cocktailName = 0;
    let cocktailPrice = 0;
    let cocktailCount = 0;
    let order = 0;
    let money = 0;

    for (let i = 1; i < input.length; i += 2) {

        cocktailName = String(input[i]);
        if (desiredProfit <= income || cocktailName === "Party!") {
            if (income < desiredProfit) {
                money = desiredProfit - income;
                console.log(`We need ${money.toFixed(2)} leva more.`);
                console.log(`Club income - ${income.toFixed(2)} leva.`);
                break;
            } else if (income > desiredProfit) {
                console.log(`Target acquired.`);
                console.log(`Club income - ${income.toFixed(2)} leva.`);
                break;
            }

        } else {
            cocktailPrice = Number(cocktailName.length);
            cocktailCount = Number(input[i + 1]);
            order = cocktailPrice * cocktailCount;
            if (order % 2 !== 0) {
                order = order * 0.75;
            }
            income += order;
            if (income >= desiredProfit) {
                console.log(`Target acquired.`);
                console.log(`Club income - ${income.toFixed(2)} leva.`);
                break;

            }
        }

    }

}
club(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);