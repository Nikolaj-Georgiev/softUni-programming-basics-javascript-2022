function footballResults(input) {
    let resultFirstGame = input[0];
    let resultSecondGame = input[1];
    let resultThirdGame = input[2];

    let wins = 0;
    let losts = 0;
    let draws = 0;

    if (resultFirstGame[0] > resultFirstGame[2]) {
        wins += 1;
    } else if (resultFirstGame[0] < resultFirstGame[2]) {
        losts += 1;
    } else if (resultFirstGame[0] == resultFirstGame[2]) {
        draws += 1;
    }
    
    if (resultSecondGame[0] > resultSecondGame[2]) {
        wins += 1;
    } else if (resultSecondGame[0] < resultSecondGame[2]) {
        losts += 1;
    } else if (resultSecondGame[0] == resultSecondGame[2]) {
        draws += 1;
    }

    if (resultThirdGame[0] > resultThirdGame[2]) {
        wins += 1;
    } else if (resultThirdGame[0] < resultThirdGame[2]) {
        losts += 1;
    } else if (resultThirdGame[0] == resultThirdGame[2]) {
        draws += 1;
    }

    console.log(`Team won ${wins} games.`);
    console.log(`Team lost ${losts} games.`);
    console.log(`Drawn games: ${draws}`);

}

footballResults(["4:2", "0:3", "1:0"]);
