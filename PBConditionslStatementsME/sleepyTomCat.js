function sleepyTomCat(input) {
    let holidaysCount = Number(input[0]);
    let playNorm = 30000;

    let workingDayMins = 63;
    let holidayMins = 127;

    let workingDaysCount = 365 - holidaysCount;

    let playTime = workingDaysCount * workingDayMins + holidaysCount * holidayMins;

    let diff = Math.abs(playNorm - playTime);

    let hours = Math.floor(diff / 60);
    let mins = diff % 60;

    if (playTime > playNorm) {
        console.log("Tom will run away");
        console.log(`${hours} hours and ${mins} minutes more for play`);
    } else {
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${mins} minutes less for play`)
    } 
}

sleepyTomCat(["20"]);