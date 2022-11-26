function movieTickets(input) {
    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);

    for (let i = a1; i < a2; i++) {
        let ticketHolder = '';
        if (i % 2 !== 0) {
            let firsSymbol = String.fromCharCode(i);
            let forthSymbol = Number(firsSymbol.charCodeAt());
            let secondSymbol = 0;
            let thirdSymbol = 0;
            for (let j = 1; j < n; j++) {
                secondSymbol = j;
                for (let k = 1; k < Math.floor(n / 2); k++) {
                    thirdSymbol = k;
                    ticketHolder = '';
                    let checker = Number(secondSymbol + thirdSymbol + forthSymbol);
                    if (forthSymbol % 2 !== 0 && checker % 2 !== 0) {

                        ticketHolder += firsSymbol + "-" + secondSymbol + thirdSymbol + forthSymbol;
                        console.log(ticketHolder);
                    }


                }

            }

        }

    }

}
movieTickets(["76",
    "78",
    "7"
]);