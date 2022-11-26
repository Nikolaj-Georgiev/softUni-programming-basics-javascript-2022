function movieDay(input) {
    let shootingTime = Number(input[0]);
    let scenesCount = Number(input[1]);
    let sceneLenght = Number(input[2]);

    let terrainPrep = shootingTime * 0.15;

    let totalMovieTime = scenesCount * sceneLenght + terrainPrep;

    let time = Math.abs(shootingTime - totalMovieTime);

    if (shootingTime >= totalMovieTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(time)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(time)} minutes.`);
    }

}

movieDay(["60", "15.5", "3"]);