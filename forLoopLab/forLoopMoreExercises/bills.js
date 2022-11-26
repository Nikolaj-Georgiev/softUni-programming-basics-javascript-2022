function bills(input) {
    let months = Number(input[0]);

    let electricity = 0;
    let water = 20;
    let internet = 15;
    let others = 0;

    let electricitySum = 0;
    let waterSum = 0;
    let internetSum = 0;
    let othersSum = 0;

    for (i = 1; i <= months; i++) {
        electricity = Number(input[i]);
        electricitySum += electricity;
        waterSum += water;
        internetSum += internet;
        others = (electricity + water + internet) * 1.20;
        othersSum += others
    }

    let averagePerMonthSum = (electricitySum + waterSum + internetSum + othersSum) / months;

    console.log(`Electricity: ${electricitySum.toFixed(2)} lv`);
    console.log(`Water: ${waterSum.toFixed(2)} lv`);
    console.log(`Internet: ${internetSum.toFixed(2)} lv`);
    console.log(`Other: ${othersSum.toFixed(2)} lv`);
    console.log(`Average: ${averagePerMonthSum.toFixed(2)} lv`);
}

bills(["5",
    "68.63",
    "89.25",
    "132.53",
    "93.53",
    "63.22"
]);