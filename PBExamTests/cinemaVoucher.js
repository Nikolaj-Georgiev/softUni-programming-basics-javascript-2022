function cinemaVoucher(input) {
    let voucherSum = Number(input[0]);

    let bothTickets = 0;
    let ticketsMoney = 0;
    let others = 0;
    let othersMoney = 0;

    for (let i = 1; i < input.length; i++) {
        let name = input[i];
        if (name === 'End') {
            break;
        }
        if (name.length > 8) {
            ticketsMoney = name.charCodeAt(0) + name.charCodeAt(1);
            if ((voucherSum - ticketsMoney) >= 0) {
                voucherSum -= ticketsMoney;
                bothTickets += 1;
            } else if ((voucherSum - ticketsMoney) < 0) {
                break;
            }

        } else if (name.length <= 8) {
            othersMoney = name.charCodeAt(0);
            if ((voucherSum - othersMoney) >= 0) {
                voucherSum -= othersMoney;
                others++;
            } else if ((voucherSum - others) < 0) {
                break;
            }
        }
    }
    console.log(bothTickets);
    console.log(others);


}

cinemaVoucher(["1500", "Avengers: Endgame", "Bohemian Rhapsody", "Deadpool 2", "End"]);