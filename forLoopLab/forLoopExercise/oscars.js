function oscars(input) {
    let actor = input[0];
    let pointsFromAcademy = Number(input[1]);
    let assessorsCount = Number(input[2]);

    let assessorName = 0;
    let totalPoints = pointsFromAcademy;
    let assessorNameLength = 0;
    let assessorPoints = 0;
    let points = 0;

    for (let i = 3; i < input.length; i++) {
        if (i % 2 !== 0) {
            assessorName = String(input[i]);
            assessorNameLength = Number(assessorName.length);
            assessorPoints = Number(input[i + 1]);
            totalPoints += ((assessorNameLength * assessorPoints) / 2);

        }
        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            break;
        }

    }

    points = 1250.5 - totalPoints;

    if (totalPoints <= 1250.5) {
        console.log(`Sorry, ${actor} you need ${points.toFixed(1)} more!`);
    }


}

oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"
]);