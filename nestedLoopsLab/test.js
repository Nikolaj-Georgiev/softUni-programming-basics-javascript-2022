function test() {
    let variable = 15;
    let whatIsIt = typeof variable;

    if (typeof variable === 'number') {
        let result = variable * variable;
        console.log(result);
    } else if (whatIsIt === 'string') {
        result = variable + variable;
        console.log(result);
    }

}
test();