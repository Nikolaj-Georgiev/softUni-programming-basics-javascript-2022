function oscars(input) {
    let actorName = input[0];
    let actorPoints = Number(input[1]);
    let assessingActorsCount = Number(input[2]);

    for (let i = 3; i < input.length; i++) {
        let assessingActorName = input[i];
        let givenPoints = Number(input[++i]);
        let points = 0;

        if (actorPoints >= 1250.5) {
            break;
        }

        points = (assessingActorName.length * givenPoints / 2);
        actorPoints += points;
    }

    if (actorPoints >= 1250.5) {
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${actorPoints.toFixed(1)}!`);
    } else {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - actorPoints).toFixed(1)} more!`);
    }

}
oscars(["Zahari Baharov",
    "205",
    "4",
    "Johnny Depp",
    "45",
    "Will Smith",
    "29",
    "Jet Lee",
    "10",
    "Matthew Mcconaughey",
    "39"
]);