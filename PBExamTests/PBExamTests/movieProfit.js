function movieProfit(input) {
    let movieName = input[0];
    let daysCount = Number(input[1]);
    let daylyTicketsCount = Number(input[2]);
    let ticketPrice = Number(input[3]);
    let cinemaPercent = Number(input[4]) / 100;

    let ticketsMoney = (daylyTicketsCount * ticketPrice) * daysCount;
    let cinemaMoney = ticketsMoney * cinemaPercent;

    let profit = ticketsMoney - cinemaMoney;

    console.log(`The profit from the movie ${movieName} is ${profit.toFixed(2)} lv.`);

}

movieProfit(["Python Basics", "40", "34785", "10.45", "14"]);
