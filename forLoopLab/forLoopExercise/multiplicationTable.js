function multiplicationTable(input) {
    let num = Number(input[0]);
    let numResult = 0;

    for (let i = 1; i <= 10; i++) {
        numResult = i * num;
        console.log(`${i} * ${num} = ${numResult}`);
    }

}

multiplicationTable(["6"]);