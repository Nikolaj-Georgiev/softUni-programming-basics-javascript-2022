function squareOfStars(number) {

    let star = '*';
    let delimiter = ' ';

    for (let i = 1; i <= number; i++) {
        let result = '';
        for (let j = 1; j <= number; j++) {
            (j == number) ? result += star: result += star + delimiter;
        }
        console.log(result);

    }
}
squareOfStars(10);