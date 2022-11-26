function rectangleNXNStars(number) {

    let star = '*';

    for (let i = 1; i <= number; i++) {
        let result = '';
        for (let j = 1; j <= number; j++) {
            result += star;
        }
        console.log(result);
    }
}
rectangleNXNStars(5);