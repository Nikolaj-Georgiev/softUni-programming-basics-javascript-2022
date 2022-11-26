function reportSystem(input) {

    let neededMoney = Number(input[0]);

    let index = 1;
    let command = input[index];

    let moneySum = 0;
    let sumCs = 0;
    let sumCc = 0;
    let cScount = 0;
    let cCcount = 0;

    while (command !== "End") {
        let dealAmount = Number(command);

        if (index % 2 !== 0) {
            if (dealAmount > 100) {
                console.log("Error in transaction!");
            } else {
                cScount++;
                moneySum += dealAmount;
                sumCs += dealAmount;
                console.log("Product sold!");
            }
        } else if (index % 2 === 0) {
            if (dealAmount < 10) {
                console.log("Error in transaction!");
            } else {
                cCcount++;
                moneySum += dealAmount;
                sumCc += dealAmount;
                console.log("Product sold!");
            }
        }

        if (moneySum >= neededMoney) {
            break;
        }
        command = input[++index];
    }
    let averageCs = sumCs / cScount;
    let averageCc = sumCc / cCcount;

    if (moneySum >= neededMoney) {
        console.log(`Average CS: ${averageCs.toFixed(2)}`);
        console.log(`Average CC: ${averageCc.toFixed(2)}`);
    } else {
        console.log("Failed to collect required money for charity.");
    }

}
reportSystem(["600",
    "86",
    "150",
    "98",
    "227",
    "End"
]);