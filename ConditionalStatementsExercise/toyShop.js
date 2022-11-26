function toyShop(input){
    let excursionPrice = Number(input[0]);
    let puzzels = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let tedyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzelPrice = 2.60;
    let talkingDollsPrice = 3;
    let tedyBearsPrice = 4.10;
    let minionsPrice = 8.20;
    let trucksPrice = 2;

    let orderSum = puzzels * puzzelPrice + talkingDolls * talkingDollsPrice + tedyBears * tedyBearsPrice + minions * minionsPrice + trucks * trucksPrice;
    let toysSum = puzzels + talkingDolls + tedyBears + minions + trucks;

    let discount = 0;

    if(toysSum >= 50){
        discount = orderSum * 0.25;
    }

    let endPrice = orderSum - discount;
    let rent = endPrice * 0.1;
    let profit = endPrice - rent;

    let money = 0;

    if(profit >= excursionPrice){
        money = (profit - excursionPrice).toFixed(2);
        console.log(`Yes! ${money} lv left.`);
    }else{
        money = (excursionPrice - profit).toFixed(2);
        console.log(`Not enough money! ${money} lv needed.`);
    }

}
toyShop(["40.8", "20", "25", "30", "50", "10"]);