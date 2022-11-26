function numberPyramid(input) {
    let n = Number(input[0]);
    let counter = 1;
    let stringResult = '';
    let flag = false;

    for (let i = 1; i <= n; i++) {


        for (let j = 1; j <= i; j++) {
            if (counter > n) {
                flag = true;
                break;
            }
            stringResult += counter + " ";
            counter++;
        }
        console.log(stringResult);
        stringResult = '';
        if (flag) {
            break;
        }

    }


}
numberPyramid(["15"]);