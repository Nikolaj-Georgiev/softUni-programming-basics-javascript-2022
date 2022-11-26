function nameGame(input) {
    let index = 0;
    let command = input[index];

    let winningPlayerPoints = 0;
    let winningPlayerName = '';

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

        if (winningPlayerPoints < points) {
            winningPlayerPoints = points;
            winningPlayerName = playerName;
        } else if (winningPlayerPoints === points) {
            winningPlayerPoints = points;
            winningPlayerName = playerName;
        } else {
            break;
        }
        index++;
        command = input[index];
    }

    console.log(`The winner is ${winningPlayerName} with ${winningPlayerPoints} points!`);

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