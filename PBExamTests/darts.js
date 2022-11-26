function darts(input) {
    let playerName = input[0];

    let successfulShots = 0;
    let unsuccessfulShots = 0;
    let legNumber = 301;

    let index = 1;
    let command = input[index];

    while (command !== "Retire") {
        let shotType = command;
        index++;
        let shotScore = Number(input[index]);

        switch (shotType) {
            case "Triple":
                shotScore = shotScore * 3;
                break;
            case "Double":
                shotScore = shotScore * 2;
                break;
            case "Single":
                shotScore = shotScore;
                break;
        }

        if ((legNumber - shotScore) > 0) {
            legNumber -= shotScore;
            successfulShots++;
        } else if ((legNumber - shotScore) < 0) {
            unsuccessfulShots++;
        } else if ((legNumber - shotScore) == 0) {
            legNumber -= shotScore;
            successfulShots++;
            console.log(`${playerName} won the leg with ${successfulShots} shots.`);
            break;
        }
        index++;
        command = input[index];
    }

    if (legNumber !== 0) {
        console.log(`${playerName} retired after ${unsuccessfulShots} unsuccessful shots.`);
    }


}
darts(["Rob Cross",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20",
    "Triple",
    "20",
    "Double",
    "5",
    "Triple",
    "10",
    "Double",
    "6",
    "Retire"
]);