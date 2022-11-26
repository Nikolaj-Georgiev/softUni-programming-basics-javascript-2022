function tournamentOfChristmas(input) {
    let tournamentDays = Number(input[0]);
    let index = 1;
    let command = input[index];
    let wins = 0;
    let loses = 0;

    let totalRaisedMoney = 0;

    for (let i = 1; i <= tournamentDays; i++) {
        let dailyRaisedMoney = 0;
        let dailyWins = 0;
        let dailyLoses = 0;

        while (command !== "Finish") {
            let result = input[++index];

            switch (result) {
                case "win":
                    wins++;
                    dailyWins++;
                    dailyRaisedMoney += 20;
                    break;
                case "lose":
                    loses++;
                    dailyLoses++;
                    break;
            }
            command = input[++index];
        }
        if (dailyWins > dailyLoses) {
            dailyRaisedMoney = dailyRaisedMoney + (dailyRaisedMoney * 0.10);
        }

        totalRaisedMoney += dailyRaisedMoney;
        command = input[++index];

    }

    if (wins > loses) {
        totalRaisedMoney = totalRaisedMoney + (totalRaisedMoney * 0.20);
        console.log(`You won the tournament! Total raised money: ${totalRaisedMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalRaisedMoney.toFixed(2)}`);
    }



}
tournamentOfChristmas(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"
]);