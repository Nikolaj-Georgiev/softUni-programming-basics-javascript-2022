function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let peopleCount = Number(input[2]);
    
    let transportCost = 0;
    if (peopleCount >= 1 && peopleCount <= 4) {
        transportCost = budget * 0.75;
    } else if (peopleCount >= 5 && peopleCount <= 9) {
        transportCost = budget * 0.6;
    } else if (peopleCount >= 10 && peopleCount <= 24) {
        transportCost = budget / 2;
    } else if (peopleCount >= 25 && peopleCount <= 49) {
        transportCost = budget * 0.4;        
    } else if (peopleCount >= 50) {
        transportCost = budget * 0.25;
    } else {
        console.log("unknown input");
    }

    let ticketPrice = 0;
    if (category === "Normal") {
        ticketPrice = 249.99;
    } else if (category === "VIP") {
        ticketPrice = 499.99;
    }

    let neededMoney = peopleCount * ticketPrice + transportCost;

    let money = Math.abs(budget - neededMoney);

    if (budget >= neededMoney) {
        console.log(`Yes! You have ${money.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${money.toFixed(2)} leva.`)
    }


}
matchTickets(["1000", "Normal", "1"]);