function skeleton(input) { 
    let checkpointMin = Number(input[0]);
    let checkpointSec = Number(input[1]);
    let spoutMeters = Number(input[2]);
    let sekFor100Met = Number(input[3]);

    let checkpointTotalSek = checkpointMin * 60 + checkpointSec;
    let timeReduce = (spoutMeters / 120) * 2.5;

    let marinTime = (spoutMeters / 100) * sekFor100Met - timeReduce;

    let time = Math.abs(checkpointTotalSek - marinTime);

    if (marinTime <= checkpointTotalSek) {
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${marinTime.toFixed(3)}.`);
    } else {
        console.log(`No, Marin failed! He was ${time.toFixed(3)} second slower.`);
    }

}
skeleton(["2", "12", "1200", "10"]);