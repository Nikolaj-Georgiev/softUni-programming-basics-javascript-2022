function theMostPowerfulWord(input) {
    let index = 0;
    let command = input[index];

    let theMostPowerfulWord = "";
    let wordPoints = 0;

    while (command !== "End of words") {
        let word = command;
        let points = 0;

        for (let i = 0; i < word.length; i++) {
            let wordValue = Number(word.charCodeAt(i));
            points += wordValue;
        }

        let startingLetter = word[0];

        if (startingLetter === "a" || startingLetter === "e" || startingLetter === "i" || startingLetter === "o" || startingLetter === "u" || startingLetter === "y" ||
            startingLetter === "A" || startingLetter === "E" || startingLetter === "I" || startingLetter === "O" || startingLetter === "U" || startingLetter === "Y") {
            points = points * Number(word.length);
        } else {
            points = Math.floor(points / Number(word.length));
        }

        if (wordPoints < points) {
            wordPoints = points;
            theMostPowerfulWord = word;
        }

        index++;
        command = input[index];

    }
    console.log(`The most powerful word is ${theMostPowerfulWord} - ${wordPoints}`);
}
theMostPowerfulWord(["But",
    "Some",
    "People",
    "Say",
    "It's",
    "LOVE",
    "End of words"
]);