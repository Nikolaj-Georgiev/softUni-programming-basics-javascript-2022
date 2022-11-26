function pipesInPool(input){
    let poolVolumeV = Number(input[0]);
    let pipe1DebitP1 = Number(input[1]);
    let pipe2DebitP2 = Number(input[2]);
    let hoursH = Number(input[3]);

    let pipe1Litters = pipe1DebitP1 * hoursH;
    let pipe2Litters = pipe2DebitP2 * hoursH;

    let addedLiters = pipe1Litters + pipe2Litters;

    let percenPoolFill = (addedLiters / poolVolumeV) * 100;
    let percentP1 = (pipe1Litters / addedLiters) * 100;
    let percentP2 = (pipe2Litters / addedLiters) * 100;

    let litters = Math.abs(poolVolumeV - addedLiters);

    if (poolVolumeV >= addedLiters) {
        console.log(`The pool is ${percenPoolFill.toFixed(2)}% full. Pipe 1: ${percentP1.toFixed(2)}%. Pipe 2: ${percentP2.toFixed(2)}%.`);
    } else {
        console.log(`For ${hoursH} hours the pool overflows with ${litters} liters.`);
    }

}
pipesInPool(["1000" , "100", "120", "3"]);