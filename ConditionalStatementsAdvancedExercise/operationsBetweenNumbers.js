function operationsBetweenNumbers(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];


    let result = 0;
    let isEven = 0;

    if (operator === "+") {
        result = N1 + N2;
        if (result % 2 === 0) {
            isEven = "even";
        } else {
            isEven = "odd";
        }
        console.log(`${N1} ${operator} ${N2} = ${result} - ${isEven}`);
    } else if (operator === "-") {
        result = N1 - N2;
        if (result % 2 === 0) {
            isEven = "even";
        } else {
            isEven = "odd";
        }
        console.log(`${N1} ${operator} ${N2} = ${result} - ${isEven}`);
    } else if (operator === "*") {
        result = N1 * N2;
        if (result % 2 === 0) {
            isEven = "even";
        } else {
            isEven = "odd";
        }
        console.log(`${N1} ${operator} ${N2} = ${result} - ${isEven}`);
    } else if (operator === "/") {
        result = N1 / N2;
        if (N2 === 0) {
            console.log(`Cannot divide ${N1} by zero`);
        } else {
            console.log(`${N1} / ${N2} = ${result.toFixed(2)}`);
        }

    } else if (operator === "%") {
        result = N1 % N2;
        if (N2 === 0) {
            console.log(`Cannot divide ${N1} by zero`);
        } else {
            console.log(`${N1} % ${N2} = ${result}`);
        }

    }


}

operationsBetweenNumbers(["7", "3", "*"]);