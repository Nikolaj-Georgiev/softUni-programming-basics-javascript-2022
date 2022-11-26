function lunchBrake(input){
    let seriesName = String(input[0]);
    let seriesLength = Number(input[1]);
    let brakeLenght = Number(input[2]);

    let lunchTime = brakeLenght * 1/8;  // ima li razlika ako e v skobi li bez?
    let relaxTime = brakeLenght * 1/4;

    let seriesWatch = brakeLenght - lunchTime - relaxTime;
    
    let time = 0;
    
    if(seriesWatch >= seriesLength){
        time = Math.ceil(seriesWatch - seriesLength);
        console.log(`You have enough time to watch ${seriesName} and left with ${time} minutes free time.`);
    }else{
        time = Math.ceil(seriesLength - seriesWatch);
        console.log(`You don't have enough time to watch ${seriesName}, you need ${time} more minutes.`)
    }

}
lunchBrake(["Teen Wolf", "48", "60"]);
