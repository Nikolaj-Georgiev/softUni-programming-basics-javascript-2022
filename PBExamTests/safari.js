function safari(input) {
    let budget = Number(input[0]);
    let neededFuelLiters = Number(input[1]);
    let weekDay = input[2];

    let fuelMoney = neededFuelLiters * 2.10;
    let gid = 100;
    
    let neededMoney = fuelMoney + gid;

    if (weekDay === "Saturday") {
        neededMoney = neededMoney * 0.9;
    }else if (weekDay === "Sunday") {
        neededMoney = neededMoney * 0.8;
    }

    let money = Math.abs(budget - neededMoney);

    if (budget >= neededMoney) {
        console.log(`Safari time! Money left: ${money.toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${money.toFixed(2)} lv.`);
    }

   
}

safari(["1000", "10", "Sunday"]);