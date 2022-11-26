function testPyramid(number) {
    let string = "";
    // External loop
    for (let i = 1; i <= number; i++) {
        // printing spaces
        for (let j = 1; j <= number - i; j++) {
            string += " ";
        }
        // printing star
        for (let k = 0; k < 1 * i; k++) {
            string += "* ";
        }
        string += "\n";
    }
    for (let i = 0; i < number; i++) {
        // printing spaces
        for (let j = 0; j < i; j++) {
            string += " ";
        }
        // printing star
        for (let k = 0; k < 1 * (number - i) - 1; k++) {
            string += " *";
        }
        string += "\n";
    }
    console.log(string);

}
testPyramid(5);