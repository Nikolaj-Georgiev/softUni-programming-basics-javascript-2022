function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let spendMoney = 0;
    let vacationType = 0;

    if (season === "summer") {
        if (budget <= 100) {
            spendMoney = budget * 0.3;
            vacationType = "Camp";
            console.log("Somewhere in Bulgaria");
            console.log(`${vacationType} - ${spendMoney.toFixed(2)}`);
        } else if (budget <= 1000) {
            spendMoney = budget * 0.4;
            vacationType = "Camp";
            console.log("Somewhere in Balkans");
            console.log(`${vacationType} - ${spendMoney.toFixed(2)}`);
        } else {
            spendMoney = budget * 0.9;
            vacationType = "Hotel";
            console.log("Somewhere in Europe");
            console.log(`${vacationType} - ${spendMoney.toFixed(2)}`);
        }
    } else if (season === "winter") {
        if (budget <= 100) {
            spendMoney = budget * 0.7;
            vacationType = "Hotel";
            console.log("Somewhere in Bulgaria");
            console.log(`${vacationType} - ${spendMoney.toFixed(2)}`);
        } else if (budget <= 1000) {
            spendMoney = budget * 0.8;
            vacationType = "Hotel";
            console.log("Somewhere in Balkans");
            console.log(`${vacationType} - ${spendMoney.toFixed(2)}`);
        } else {
            spendMoney = budget * 0.9;
            vacationType = "Hotel";
            console.log("Somewhere in Europe");
            console.log(`${vacationType} - ${spendMoney.toFixed(2)}`);
        }
    } else {
        console.log("invalid season");
    }


}

journey(["1500", "summer"]);