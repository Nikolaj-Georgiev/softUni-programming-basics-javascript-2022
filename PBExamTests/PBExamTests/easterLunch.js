function easterLunch(input) {
    let kozunakCount = Number(input[0]);
    let dozenEggsCount = Number(input[1]);
    let cookiesKg = Number(input[2]);

    let kozunakMoney = kozunakCount * 3.20;
    let eggsMoney = dozenEggsCount * 4.35;
    let cookiesMoney = cookiesKg * 5.40;
    let eggsPaintMoney = dozenEggsCount * 12 * 0.15;

    let lunchMoney = kozunakMoney + eggsMoney + cookiesMoney + eggsPaintMoney;

    console.log(lunchMoney.toFixed(2));

}
easterLunch(["3", "2", "3"]);