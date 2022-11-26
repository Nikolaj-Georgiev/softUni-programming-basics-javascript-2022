function movieRatings(input) {
    let numberOfMovies = Number(input[0]);
    let highestRatingMovie = "";
    let lowestRatingMovie = '';
    let highestRating = 0;
    let lowestRating = 0;
    let totalRating = 0;

    for (let i = 1; i < input.length; i++) {
        movieName = input[i];
        i++;
        movieScore = Number(input[i]);
        totalRating += movieScore;

        if (highestRating < movieScore) {
            highestRating = movieScore;
            highestRatingMovie = movieName;

        } else if (lowestRating > movieScore || lowestRating === 0) {
            lowestRating = movieScore;
            lowestRatingMovie = movieName;
        }

    }

    console.log(`${highestRatingMovie} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestRatingMovie} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${(totalRating / numberOfMovies).toFixed(1)}`);

}
movieRatings(["5",
    "A Star is Born",
    "7.8",
    "Creed 2",
    "7.3",
    "Mary Poppins",
    "7.2",
    "Vice",
    "7.2",
    "Captain Marvel",
    "7.1"
]);