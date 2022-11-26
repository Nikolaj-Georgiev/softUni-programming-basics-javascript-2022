function tennisRanklist(input) {

    let tournaments = Number(input[0]);
    let initialPoints = Number(input[1]);
    let tournamentStage = 0;
    let gamesPoints = 0;
    let wins = 0;

    for (i = 2; i < input.length; i++) {
        tournamentStage = input[i];
        switch (tournamentStage) {
            case "F":
                gamesPoints += 1200;
                break;
            case "SF":
                gamesPoints += 720;
                break;
            case "W":
                gamesPoints += 2000;
                wins++;
                break;
        }
    }

    let totalPoints = gamesPoints + initialPoints;
    let averagePoints = Math.floor(gamesPoints / tournaments);
    let percentageOfWins = (wins / tournaments) * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${percentageOfWins.toFixed(2)}%`);


}

tennisRanklist(["5", "1400",
    "F", "SF", "W", "W", "SF"
]);