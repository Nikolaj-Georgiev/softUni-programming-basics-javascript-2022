function balls(input) {

    let ballsCount = Number(input[0]);

    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherBalls = 0;
    let blackBalls = 0;

    for (let i = 1; i <= ballsCount; i++) {

        let ball = input[i];

        switch (ball) {

            case "red":
                totalPoints += 5;
                redBalls++;
                break;
            case "orange":
                totalPoints += 10;
                orangeBalls++;
                break;
            case "yellow":
                totalPoints += 15;
                yellowBalls++;
                break;
            case "white":
                totalPoints += 20;
                whiteBalls++;
                break;
            case "black":
                totalPoints = Math.floor(totalPoints / 2);
                blackBalls++;
                break;
            default:
                otherBalls++;
                continue;

        }
    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${blackBalls}`);


}
balls(["5",
    "red",
    "red",
    "ddd",
    "ddd",
    "ddd"
]);