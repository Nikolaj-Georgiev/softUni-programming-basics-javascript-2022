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
        let movieTickets = 0;

        while (ticketType !== "End") {
            movieTickets++;

            switch (ticketType) {
                case "standard":
                    standardTickets++;

                    break;
                case "student":
                    studentTickets++;

                    break;
                case "kid":
                    kidTickets++;

                    break;
            }

            if (movieTickets >= freeSeats) {
                break;
            }

            ticketType = input[++index];
        }

        totalTickets += movieTickets;

        console.log(`${movieName} - ${(movieTickets / freeSeats * 100).toFixed(2)}% full.`)

        command = input[++index];
    }


    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Shutter Island",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Rush",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Deadpool",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Finish"
]);