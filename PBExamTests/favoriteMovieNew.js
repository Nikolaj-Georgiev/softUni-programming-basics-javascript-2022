function favoriteMovieNew() {
    let index = 0;
    let command = input[index];
    let favoriteMovie = '';
    let maxPoints = 0;

    while (command !== "STOP") {
        if (index >= 6) {
            console.log("The limit is reached.");
            break;
        }

        let movieName = command;
        let points = 0;

        for (let i = 0; i < movieName.length; i++) {
            let charValue = movieName.charCodeAt(i);
            let charSymbol = movieName.charAt(i);
            let reducer = movieName.length;
            let stringOfCapitals = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let stringOfLowersAndSpace = "abcdefghijklmnopqrstuvwxyz";
            if (charSymbol === " ") {
                points += charValue;
                continue;
            }
            for (let j = 0; j < stringOfCapitals.length; j++) {
                let capitalLetter = stringOfCapitals.charAt(j);
                let flag = false;
                if (charSymbol === capitalLetter) {
                    charValue = charValue - reducer;
                    break;
                } else {
                    for (let k = 0; k < stringOfLowersAndSpace.length; k++) {
                        let lowerLetterOrSpace = stringOfLowersAndSpace.charAt(k);
                        if (charSymbol === lowerLetterOrSpace) {
                            charValue = charValue - (reducer * 2);
                            flag = true;
                            break;
                        }
                    }


                }
                if (flag) {
                    break;
                }

            }
            points += charValue;

        }
        if (maxPoints < points) {
            maxPoints = points;
            favoriteMovie = movieName;
            index++;
            command = input[index];
        } else {
            index++;
            command = input[index];
        }

    }

    console.log(`The best movie for you is ${favoriteMovie} with ${maxPoints} ASCII sum.`);

}


favoriteMovieNew