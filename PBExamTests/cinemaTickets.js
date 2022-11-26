function cinemaTickets(input) {
    let index = 0;
    let command = input[index];

    let standardTickets = 0;
    let studentTickets = 0;
    let kidTickets = 0;
    let totalTickets = 0;

    while (command !== "Finish") {
        let movieName = command;
        index++;
        let freeSeats = Number(input[index]);
        index++;
        let ticketType = input[index];
        let ticketCounter = 0;

        while (ticketType !== "End") {
            ticketCounter++;


            switch (ticketType) {
                case "student":
                    studentTickets++;
                    break;
                case "standard":
                    standardTickets++;
                    break;
                case "kid":
                    kidTickets++;
                    break;
            }
            if (ticketCounter >= freeSeats) {
                break;
            }

            index++;
            ticketType = input[index];

        }
        totalTickets += ticketCounter;
        console.log(`${movieName} - ${(ticketCounter / freeSeats * 100).toFixed(2)}% full.`);

        index++;
        command = input[index];

    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);

}
cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"
]);