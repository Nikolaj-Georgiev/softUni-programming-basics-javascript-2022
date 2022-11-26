function fruitMarket(input) {
    let strawberriesPrice = Number(input[0]);
    let bannanasKg = Number(input[1]);
    let orangesKg = Number(input[2]);
    let raspberriesKg = Number(input[3]);
    let strawberriesKg = Number(input[4]);

    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice * 0.6;
    let bannanasPrice = raspberriesPrice * 0.2;

    let strawberriesSum =strawberriesKg * strawberriesPrice;
    let raspberriesSum = raspberriesKg * raspberriesPrice;
    let orangesSum = orangesKg * orangesPrice;
    let bannanasSum = bannanasKg * bannanasPrice;

    let totalSum = strawberriesSum + raspberriesSum + orangesSum + bannanasSum;

console.log(totalSum.toFixed(2));

}

fruitMarket([48, 10, 3.3, 6.5, 1.7]);