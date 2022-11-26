function trainingLab(input){
    let lengthW = Number(input[0]);
    let widthH = Number(input[1]);

    let desksTotal = 0;

    if(3 <= widthH && widthH <= lengthW && lengthW <= 100){

    let lengthWCm = lengthW * 100;
    let widthHCm = widthH * 100;

    let desksLength = 120;
    let desksWidth = 70;

    let corridor = 100;

    let widthHminusCorridor = widthHCm - corridor;
    let desksOnWidth = Math.trunc(widthHminusCorridor / desksWidth);
    let desksOnLenth = Math.trunc(lengthWCm / desksLength);

    let desksTotal = Math.round(desksOnWidth * desksOnLenth - 3);

    console.log(desksTotal);
    }else{
        console.log("hui");
    }

}
trainingLab([15, 8.9]);

function trainingLab1(input){
    let lengthW = Number(input[0]);
    let widthH = Number(input[1]);

    let lengthWCm = lengthW * 100;
    let widthHCm = widthH * 100;

    let desksLength = 120;
    let desksWidth = 70;

    let corridor = 100;

    let widthHminusCorridor = widthHCm - corridor;
    let desksOnWidth = Math.trunc(widthHminusCorridor / desksWidth);
    let desksOnLenth = Math.trunc(lengthWCm / desksLength);

    let desksTotal = Math.round(desksOnWidth * desksOnLenth - 3);

    console.log(desksTotal);

}
trainingLab1([8.4, 5.2]);