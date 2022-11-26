function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combinations = 0;
    let flag = false;

    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            let result = 0;
            result = i + j;
            combinations++;
            if (result === magicNumber) {
                flag = true;
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNumber})`);
                break;
            }
        }
        if (flag) {
            break;
        }
    }

    if (flag !== true) {
        console.log(`${combinations} combinations - neither equals ${magicNumber}`);
    }


}
sumOfTwoNumbers(["23",
    "24",
    "20"
]);