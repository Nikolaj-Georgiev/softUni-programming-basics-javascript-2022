function agencyProfit(input) {
    let avioCompany = input[0];
    let elderTicketsCount = Number(input[1]);
    let childrenTicketsCount = Number(input[2]);
    let elderTicketPrice = Number(input[3]);
    let serviceTax = Number(input[4]);

    let childrenTicketsPrice = elderTicketPrice * 0.3;
    
    let turnover = elderTicketsCount * (elderTicketPrice + serviceTax) + childrenTicketsCount * (childrenTicketsPrice + serviceTax);
    let profit = turnover * 0.2;

    console.log(`The profit of your agency from ${avioCompany} tickets is ${profit.toFixed(2)} lv.`);    

}
agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"]);