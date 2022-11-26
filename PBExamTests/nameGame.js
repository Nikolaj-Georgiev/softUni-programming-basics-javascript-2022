function nameGame(input) {
    let index = 0;
    let command = input[index];

    let playerOnePoints = 0;
    let playerTwoPoints = 0;
    let playerOneName = '';
    let playerTwoName = '';


    while (command !== "Stop") {
        let playerName = input[index];
        let points = 0;

        for (let i = 0; i < playerName.length; i++) {
            index++;
            let charValue = Number(input[index]);

            if (charValue === Number(playerName.charCodeAt(i))) {
                points += 10;
            } else {
                points += 2;
            }
        }

        if (command === input[0]) {
            playerOnePoints += points;
            playerOneName = command;
        } else {
            playerTwoPoints += points;
            playerTwoName = command;
        }

        index++;
        command = input[index];

    }

    if (playerOnePoints > playerTwoPoints) {
        console.log(`The winner is ${playerOneName} with ${playerOnePoints} points!`);
    } else {
        console.log(`The winner is ${playerTwoName} with ${playerTwoPoints} points!`);
    }


}
nameGame(["Pesho",
    "124",
    "34",
    "111",
    "97",
    "99",
    "Gosho",
    "98",
    "124",
    "88",
    "76",
    "18",
    "Stop"
]);