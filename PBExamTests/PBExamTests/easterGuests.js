function easterGuests(input) {
    let guestsCount = Number(input[0]);
    let budget = Number(input[1]);

    let kozunakCount = Math.ceil(guestsCount / 3);
    let eggsCount = guestsCount * 2;

    let kozunakMoney = kozunakCount * 4;
    let eggsMoney = eggsCount * 0.45;

    let totalSum = kozunakMoney + eggsMoney;

    let money = Math.abs(budget - totalSum);

    if (budget >= totalSum) {
        console.log(`Lyubo bought ${kozunakCount} Easter bread and ${eggsCount} eggs.`);
        console.log(`He has ${money.toFixed(2)} lv. left.`);
    } else {
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${money.toFixed(2)} lv. more.`)
    }


}
easterGuests(["10", "35"]);