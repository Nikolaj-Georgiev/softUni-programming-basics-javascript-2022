function easterCompetition(input) {

    let kozunaksCount = Number(input[0]);

    let bestBaker = '';
    let bestBakerPoints = 0;
    let index = 1;


    for (let outerCycleCount = 1; outerCycleCount <= kozunaksCount; outerCycleCount++) {
        let command = input[index];
        let baker = command;
        let points = 0;
        index++;
        while (command !== "Stop") {
            points += Number(input[index]);
            command = input[++index];
        }
        console.log(`${baker} has ${points} points.`);
        if (points > bestBakerPoints) {
            console.log(`${baker} is the new number 1!`);
        }
        index++;
        if (bestBakerPoints < points) {
            bestBakerPoints = points;
            bestBaker = baker;
        }

    }

    console.log(`${bestBaker} won competition with ${bestBakerPoints} points!`);

}
easterCompetition(["2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"
]);