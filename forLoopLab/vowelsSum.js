function vowelsSum(input) {
    let word = String(input[0]);
    let vowelSum = 0;

    for (let i = 0; i < word.length; i++) {
        let char = word.charAt(i);
        switch (char) {
            case "a":
                vowelSum += 1;
                break;
            case "e":
                vowelSum += 2;
                break;
            case "i":
                vowelSum += 3;
                break;
            case "o":
                vowelSum += 4;
                break;
            case "u":
                vowelSum += 5;
                break;
            default:
                vowelSum += 0;
                break;
        }
    }

    console.log(vowelSum)

}

vowelsSum(["hello"]);