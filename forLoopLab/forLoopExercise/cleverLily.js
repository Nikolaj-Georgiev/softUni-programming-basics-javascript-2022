function cleaverLily(input) {

    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let birthdayMoney = 0;
    let toysCount = 0;
    let money = 0;
    let addedMoney = 10;
    let toysSum = 0;
    let brotherSteals = 0;
    let totalMoney = 0;
    let diff = 0;


    for (let i = 1; i <= age; i++) {

        if (i % 2 === 0) {
            money = money + addedMoney;
            birthdayMoney += money;
            brotherSteals += 1;
        } else {
            toysCount += 1;
        }

    }

    toysSum = toysCount * toyPrice;
    totalMoney = (birthdayMoney - brotherSteals) + toysSum;

    diff = Math.abs(totalMoney - washingMachinePrice);

    if (totalMoney >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else if (washingMachinePrice > totalMoney) {
        console.log(`No! ${diff.toFixed(2)}`);
    }

}

cleaverLily(["21",
    "1570.98",
    "3"
]);