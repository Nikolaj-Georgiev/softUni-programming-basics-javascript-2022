function bikeRace(input) {
    let juniorsCount = Number(input[0]);
    let seniorsCount = Number(input[1]);
    let trail = input[2];

    let totalCyclists = juniorsCount + seniorsCount;

    let juniorTicket = 0;
    let seniorTicket = 0;

    if (trail == "cross-country" && totalCyclists >= 50) {
        juniorTicket = 8 * 0.75;
        seniorTicket = 9.5 * 0.75;

    } else if (trail == "cross-country" && totalCyclists < 50) {
        juniorTicket = 8;
        seniorTicket = 9.5;

    } else if (trail == "trail"){
        juniorTicket = 5.50;
        seniorTicket = 7;

    } else if (trail == "downhill") {
        juniorTicket = 12.25;
        seniorTicket = 13.75;

    } else if (trail == "road") {
        juniorTicket = 20;
        seniorTicket = 21.50;
    }

    let collectedMoney = (juniorsCount * juniorTicket) + (seniorsCount * seniorTicket);
    let expencesMoney = collectedMoney * 0.05;
    let charityMoney = collectedMoney - expencesMoney;

    console.log(charityMoney.toFixed(2));


}
bikeRace(["21", "26", "cross-country"]);