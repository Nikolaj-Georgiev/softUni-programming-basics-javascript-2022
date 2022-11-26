function giftsFromSanta(input) {

    let N = Number(input[0]);
    let M = Number(input[1]);
    let S = Number(input[2]);
    let numbers = '';

    for (let i = M; i >= N; i--) {

        if (i % 2 === 0 && i % 3 === 0) {

            if (i !== S) {
                numbers += '' + i + ' ';
            } else {
                break;
            }
        } else {
            if (i === S) {
                continue;
            }
        }

    }

    console.log(numbers);


}
giftsFromSanta(["1",
    "36",
    "12"
]);