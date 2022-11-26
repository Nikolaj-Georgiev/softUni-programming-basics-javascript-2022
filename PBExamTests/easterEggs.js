function easterEggs(input) {

    let eggsCount = Number(input[0]);
    let maxEggs = Number.MIN_SAFE_INTEGER;
    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0;

    for (let i = 1; i <= eggsCount; i++) {
        let eggColor = input[i];

        switch (eggColor) {
            case "red":
                redEggs++;
                break;
            case "orange":
                orangeEggs++;
                break;
            case "blue":
                blueEggs++;
                break;
            case "green":
                greenEggs++;
                break;
        }
    }

    let color = '';
    if (maxEggs < redEggs) {
        maxEggs = redEggs;
        color = "red";
    }
    if (redEggs < orangeEggs) {
        maxEggs = orangeEggs;
        color = "orange";
    }
    if (orangeEggs < blueEggs) {
        maxEggs = blueEggs;
        color = "blue";
    }
    if (blueEggs < greenEggs) {
        maxEggs = greenEggs;
        color = "green";
    }

    console.log(`Red eggs: ${redEggs}`);
    console.log(`Orange eggs: ${orangeEggs}`);
    console.log(`Blue eggs: ${blueEggs}`);
    console.log(`Green eggs: ${greenEggs}`);
    console.log(`Max eggs: ${maxEggs} -> ${color}`);
}
easterEggs(["7",
    "orange",
    "blue",
    "green",
    "orange",
    "blue",
    "red",
    "green"
]);