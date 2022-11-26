function streamOfLetters(input) {

    let index = 0;
    let command = input[index];

    let mainWordHolder = '';
    let n = '';
    let o = '';
    let c = '';
    let wordHolder = '';

    while (command !== "End") {
        let char = command;
        if (index > input.length) {
            break;
        }

        if (n === "n" && o === "o" && c === "c") {
            mainWordHolder += wordHolder + " ";
            wordHolder = '';
            n = '';
            o = '';
            c = '';
            continue;

        }


        if (char === "n" || char === "o" || char === "c") {
            if (n !== "n" && char === "n") {
                n = char;
            } else if (n === "n" && char === "n") {
                wordHolder += char;
            }

            if (o !== "o" && char === "o") {
                o = char;
            } else if (o === "o" && char === "o") {
                wordHolder += char;
            }
            if (c !== "c" && char === "c") {
                c = char;
            } else if (c === "c" && char === "c") {
                wordHolder += char;
            }

        } else if (char === "A" || char === "B" || char === "C" || char === "D" || char === "E" || char === "F" || char === "G" || char === "H" || char === "I" || char === "J" || char === "K" || char === "L" || char === "M" || char === "N" || char === "O" || char === "P" || char === "Q" || char === "R" || char === "S" || char === "T" || char === "U" || char === "V" || char === "W" || char === "X" || char === "Y" || char === "Z" ||
            char === "a" || char === "b" || char === "c" || char === "d" || char === "e" || char === "f" || char === "g" || char === "h" || char === "i" || char === "j" || char === "k" || char === "l" || char === "m" || char === "n" || char === "o" || char === "p" || char === "q" || char === "r" || char === "s" || char === "t" || char === "u" || char === "v" || char === "w" || char === "x" || char === "y" || char === "z") {
            wordHolder += char;
        }

        command = input[++index];

    }

    if (n === "n" && o === "o" && c === "c") {
        mainWordHolder += wordHolder + " ";
    }

    console.log(mainWordHolder);

}
streamOfLetters([
    "o",
    "S",
    "%",
    "o",
    "l",
    "^",
    "v",
    "e",
    "c",
    "n",
    "&",
    "m",
    "e",
    "c",
    "o",
    "n",
    "End"
]);