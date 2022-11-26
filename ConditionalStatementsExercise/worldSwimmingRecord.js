function worldSwimmingRecord(input){
    let worldRecordSeconds = Number(input[0]);
    let meters = Number(input[1]);
    let oneMeterTime = Number(input[2]);

    let swimmingTime = meters * oneMeterTime;
    let delay = 12.5;
    let delayedTime = Math.floor((meters / 15)) * delay;
    let totalTime = swimmingTime + delayedTime;

    let time = 0;

    if(totalTime < worldRecordSeconds){
        time = (totalTime).toFixed(2);
        console.log(`Yes, he succeeded! The new world record is ${time} seconds.`);
    }else if(totalTime >= worldRecordSeconds){
        time = (totalTime - worldRecordSeconds).toFixed(2);
        console.log(`No, he failed! He was ${time} seconds slower.`);
    }

}
worldSwimmingRecord(["55555.67", "3017", "5.03"]);