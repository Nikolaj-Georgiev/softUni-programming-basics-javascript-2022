function goldMine(input) {

    let locationsCount = Number(input[0]);

    let index = 1;

    for (let locations = 1; locations <= locationsCount; locations++) {
        let expectedGoldIncome = Number(input[index]);
        let diggingDays = Number(input[++index]);
        let goldForTheDay = 0;
        for (let days = 1; days <= diggingDays; days++) {
            let diggedGold = Number(input[++index]);
            goldForTheDay += diggedGold;
        }
        let averageGoldForTheDay = goldForTheDay / diggingDays;
        if (averageGoldForTheDay >= expectedGoldIncome) {
            console.log(`Good job! Average gold per day: ${averageGoldForTheDay.toFixed(2)}.`);
        } else {
            console.log(`You need ${(expectedGoldIncome - averageGoldForTheDay).toFixed(2)} gold.`);
        }
        index++;

    }


}
goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"
]);