function coins(input) {
    let coins = Number(input[0]);
    let inCoins = Math.floor(coins * 100);
    let changeCounter = 0;

    while (inCoins > 0) {
        if (inCoins >= 200) {
            inCoins -= 200;
            changeCounter++;

        } else if (inCoins >= 100) {
            inCoins -= 100;
            changeCounter++;

        } else if (inCoins >= 50) {
            inCoins -= 50;
            changeCounter++;

        } else if (inCoins >= 20) {
            inCoins -= 20;
            changeCounter++;

        } else if (inCoins >= 10) {
            inCoins -= 10;
            changeCounter++;

        } else if (inCoins >= 5) {
            inCoins -= 5;
            changeCounter++;

        } else if (inCoins >= 2) {
            inCoins -= 2;
            changeCounter++;

        } else if (inCoins >= 1) {
            inCoins -= 1;
            changeCounter++;

        }
    }
    console.log(changeCounter);
}
coins(["2.73"]);