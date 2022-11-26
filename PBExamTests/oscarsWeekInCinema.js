function oscarsWeekInCinema(input) {
    let movieName = input[0];
    let hallType = input[1];
    let ticketsCount = Number(input[2]);

    let ticketPrice = 0;
    let ticketsIncome = 0;

    switch (movieName) {
        case "A Star Is Born":
            if (hallType === "normal") {
                ticketPrice = 7.50;
                ticketsIncome = ticketsCount * ticketPrice;
                console.log(`${movieName} -> ${ticketsIncome.toFixed(2)} lv.`);
            } else if (hallType === "luxury") {
                ticketPrice = 10.50;
                ticketsIncome = ticketsCount * ticketPrice;
                console.log(`${movieName} -> ${ticketsIncome.toFixed(2)} lv.`);
            } else if (hallType === "ultra luxury") {
                ticketPrice = 13.50;
                ticketsIncome = ticketsCount * ticketPrice;
                console.log(`${movieName} -> ${ticketsIncome.toFixed(2)} lv.`);
            }
            break;
        case "Bohemian Rhapsody":
            if (hallType === "normal") {
                ticketPrice = 7.35;
                ticketsIncome = ticketsCount * ticketPrice;
                console.log(`${movieName} -> ${ticketsIncome.toFixed(2)} lv.`);
            } else if (hallType === "luxury") {
                ticketPrice = 9.45;
                ticketsIncome = ticketsCount * ticketPrice;
                console.log(`${movieName} -> ${ticketsIncome.toFixed(2)} lv.`);
            } else if (hallType === "ultra luxury") {
                ticketPrice = 12.75;
                ticketsIncome = ticketsCount * ticketPrice;
                console.log(`${movieName} -> ${ticketsIncome.toFixed(2)} lv.`);
            }
            break;
        case "Green Book":
            if (hallType === "normal") {
                ticketPrice = 8.15;
                ticketsIncome = ticketsCount * ticketPrice;
                console.log(`${movieName} -> ${ticketsIncome.toFixed(2)} lv.`);
            } else if (hallType === "luxury") {
                ticketPrice = 10.25;
                ticketsIncome = ticketsCount * ticketPrice;
                console.log(`${movieName} -> ${ticketsIncome.toFixed(2)} lv.`);
            } else if (hallType === "ultra luxury") {
                ticketPrice = 13.25;
                ticketsIncome = ticketsCount * ticketPrice;
                console.log(`${movieName} -> ${ticketsIncome.toFixed(2)} lv.`);
            }
            break;
        case "The Favourite":
            if (hallType === "normal") {
                ticketPrice = 8.75;
                ticketsIncome = ticketsCount * ticketPrice;
                console.log(`${movieName} -> ${ticketsIncome.toFixed(2)} lv.`);
            } else if (hallType === "luxury") {
                ticketPrice = 11.55;
                ticketsIncome = ticketsCount * ticketPrice;
                console.log(`${movieName} -> ${ticketsIncome.toFixed(2)} lv.`);
            } else if (hallType === "ultra luxury") {
                ticketPrice = 13.95;
                ticketsIncome = ticketsCount * ticketPrice;
                console.log(`${movieName} -> ${ticketsIncome.toFixed(2)} lv.`);
            }
            break;
    }

}

oscarsWeekInCinema(["A Star Is Born", "luxury", "42"]);