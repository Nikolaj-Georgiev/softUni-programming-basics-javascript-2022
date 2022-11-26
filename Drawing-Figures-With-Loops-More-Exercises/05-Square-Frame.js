function squareFrame(number) {
    let plus = '+';
    let minus = '-';
    let bar = '|';

    for (let i = 1; i <= number; i++) {
        let result = '';
        if (i == 1 || i == number) {
            result += plus + ' ';
        } else {
            result += bar + ' ';
        }
        for (let j = 1; j <= number - 2; j++) {

            result += minus + ' ';

        }
        if (i == 1 || i == number) {
            result += plus;
        } else {
            result += bar;
        }
        console.log(result);
    }

}
squareFrame(3);