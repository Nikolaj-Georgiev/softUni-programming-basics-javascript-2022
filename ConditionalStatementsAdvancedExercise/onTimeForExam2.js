function onTimeForTheExam2(input) {
    let examHour = Number(input[0]);
    let examMin = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMin = Number(input[3]);

    let examM = examHour * 60 + examMin;
    let arrivalM = arrivalHour * 60 + arrivalMin;
    let diff = Math.abs(examM - arrivalM);
    let totalH = Math.floor(diff / 60);
    let totalM = diff % 60;


    if (examM === arrivalM) {
        console.log("On time");
    }
    if (arrivalM < examM) {
        if (diff <= 30) {
            console.log("On time");
            console.log(`${totalM} minutes before the start`);

        } else {
            console.log("Early");
            if (totalH >= 1) {
                if (totalM < 10) {
                    console.log(`${totalH}:0${totalM} hours before the start`);
                } else {
                    console.log(`${totalH}:${totalM} hours before the start`);
                }
            } else {
                console.log(`${totalM} minutes before the start`);
            }
        }

    } else if (arrivalM > examM) {
        console.log("Late");
        if (totalH >= 1) {
            if (totalM < 10) {
                console.log(`${totalH}:0${totalM} hours after the start`);
            } else {
                console.log(`${totalH}:${totalM} hours after the start`);
            }

        } else {
            console.log(`${totalM} minutes after the start`);
        }
    }

}
onTimeForTheExam2(["10", "00", "9", "25"]);