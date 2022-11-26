function timePlus15Mins(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]); 

    let addMinutes = minutes + 15;
    let addedHours = Math.floor(addMinutes / 60);
    let finalMinutes = addMinutes % 60;

    if(addedHours == 1){
        hours += 1;
    }
    if(hours > 23){
        hours = 0;
    }
    if(finalMinutes < 10){
        console.log(`${hours}:0${finalMinutes}`);
    }else{
        console.log(`${hours}:${finalMinutes}`);

    }
    
}
timePlus15Mins(["12", "49"]);