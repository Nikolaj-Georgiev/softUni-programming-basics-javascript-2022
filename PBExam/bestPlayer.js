function bestPlayer(input) {

    let index = 0;
    let command = input[index];

    let bestPlayer = '';
    let mostGoals = 0;

    while (command !== "END") {
        let player = command;
        let playerGoals = Number(input[++index]);

        if (playerGoals > mostGoals) {
            bestPlayer = player;
            mostGoals = playerGoals
        }

        if (playerGoals >= 10) {
            console.log(`${bestPlayer} is the best player!`);
            console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
            break;
        }

        command = input[++index];
    }

    if (mostGoals < 10 && mostGoals >= 3) {
        console.log(`${bestPlayer} is the best player!`);
        console.log(`He has scored ${mostGoals} goals and made a hat-trick !!!`);
    } else if (mostGoals < 10 && mostGoals < 3) {
        console.log(`${bestPlayer} is the best player!`);
        console.log(`He has scored ${mostGoals} goals.`);
    }

}
bestPlayer(["Zidane",
    "1",
    "Felipe",
    "2",
    "Johnson",
    "4",
    "END"
]);