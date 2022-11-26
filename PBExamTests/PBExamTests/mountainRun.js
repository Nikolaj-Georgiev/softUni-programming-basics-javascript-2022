function mountainRun(input){
    let recordSek = Number(input[0]);
    let distanceMet = Number(input[1]);
    let secondsForMeter = Number(input[2]);

    let climbingTime = distanceMet * secondsForMeter;
    let delay = Math.floor(distanceMet / 50) * 30;
    let georgyTime = climbingTime + delay;

    let time = Math.abs(recordSek - georgyTime);

    if (georgyTime < recordSek) {
        console.log(`Yes! The new record is ${georgyTime.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${time.toFixed(2)} seconds slower.`);
    }

}
mountainRun(["10164", "1400", "25"]);
