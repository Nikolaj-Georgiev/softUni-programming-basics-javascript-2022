function triangleOfDollars(number) {

    let dollar = '$';
    let delimiter = ' ';

    for (let i = 1; i <= number; i++) {
        let result = '';
        for (let j = 1; j <= i; j++) {
            result += dollar + delimiter;
        }
        console.log(result.trim());
    }

}
triangleOfDollars(5);