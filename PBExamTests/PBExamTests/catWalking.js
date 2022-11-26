function catWalking(input){
    let walkMins = Number(input[0]);
    let walksCount = Number(input[1]);
    let daylyCalories = Number(input[2]);

    let burnedCalories = (walkMins * 5) * walksCount;

    if (burnedCalories >= (daylyCalories / 2)){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCalories}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCalories}.`);
    }

}
catWalking(["30", "3", "600"]);