function accountBalance(input) {
    let index = 0;
    let deposit = input[index];
    let totalDeposit = 0;

    while (deposit !== "NoMoreMoney") {
        let money = Number(deposit);

        if (money <= 0) {
            console.log("Invalid operation!");
            break;
        }
        totalDeposit += money;
        console.log("Increase: " + money.toFixed(2));
        index++;
        deposit = input[index];
    }
    console.log("Total: " + totalDeposit.toFixed(2));

}
accountBalance(["120",
    "45.55",
    "-150"
]);