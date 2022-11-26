function gameNumberWars(input) {
    let firstPlayer = String(input[0]);
    let secondPlayer = String(input[1]);

    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;

    let index = 2;
    let command = input[index];

    while (command !== "End of game") {

        let firstPlayerCard = Number(input[index]);
        index++;
        let secondPlayerCard = Number(input[index]);

        if (firstPlayerCard > secondPlayerCard) {
            firstPlayerPoints += firstPlayerCard - secondPlayerCard;
        } else if (secondPlayerCard > firstPlayerCard) {
            secondPlayerPoints += secondPlayerCard - firstPlayerCard;
        } else {
            console.log("Number wars!");
            index++;
            firstPlayerCard = Number(input[index]);
            index++;
            secondPlayerCard = Number(input[index]);

            if (firstPlayerCard > secondPlayerCard) {
                console.log(`${firstPlayer} is winner with ${firstPlayerPoints} points`);
                break;
            } else {
                console.log(`${secondPlayer} is winner with ${secondPlayerPoints} points`);
                break;
            }
        }

        index++;
        command = input[index];
    }
    if (command === "End of game") {
        console.log(`${firstPlayer} has ${firstPlayerPoints} points`);
        console.log(`${secondPlayer} has ${secondPlayerPoints} points`);
    }
}
gameNumberWars(["Aleks",
    "Georgi",
    "4",
    "5",
    "3",
    "2",
    "4",
    "3",
    "4",
    "4",
    "5",
    "2"
]);