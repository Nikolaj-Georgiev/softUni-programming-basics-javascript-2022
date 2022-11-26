function pcGameShop(input) {
    let gamesCount = Number(input[0]);

    let hearthstoneCounter = 0;
    let forniteCounter = 0;
    let overwatchCounter = 0;
    let othersCounter = 0;

    for (let i = 1; i <= gamesCount; i++) {
        let gameName = input[i];
        switch (gameName) {
            case "Hearthstone":
                hearthstoneCounter++;
                break;
            case "Fornite":
                forniteCounter++;
                break;
            case "Overwatch":
                overwatchCounter++;
                break;
            default:
                othersCounter++;
                break;
        }
    }

    let totalGames = hearthstoneCounter + forniteCounter + overwatchCounter + othersCounter;

    console.log(`Hearthstone - ${(hearthstoneCounter / totalGames * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(forniteCounter / totalGames * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatchCounter / totalGames * 100).toFixed(2)}%`);
    console.log(`Others - ${(othersCounter / totalGames * 100).toFixed(2)}%`);

}
pcGameShop(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"
]);