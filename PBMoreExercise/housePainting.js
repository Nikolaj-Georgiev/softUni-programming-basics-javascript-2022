function housePainting(input){
    let houseHeightX = Number(input[0]);
    let houseLengthY = Number(input[1]);
    let roofHeigthH = Number(input[2]);

    let greenPaintLittersM2 = 3.4;
    let redPaintLittersM2 = 4.3;

    let windowSide = 1.5;
    let windowArea = windowSide * windowSide;
    let sideWallArea = (houseHeightX * houseLengthY) * 2 - (windowArea * 2);
   
    let doorSideA = 1.2;
    let doorSideB = 2;
    let doorArea = doorSideA * doorSideB;
    let frontWallArea = (houseHeightX * houseHeightX) * 2 - doorArea;

    let houseArea = sideWallArea + frontWallArea;

    let greenPaintLitters = (houseArea / greenPaintLittersM2).toFixed(2);

    let roofArea = ((houseHeightX * houseLengthY) * 2 + (houseHeightX * roofHeigthH / 2) * 2);

    let redPaintLitters = (roofArea / redPaintLittersM2).toFixed(2);

    console.log(greenPaintLitters);
    console.log(redPaintLitters);

}
housePainting([6, 10, 5.2]);

function housePainting1(input){
    let houseHeightX = Number(input[0]);
    let houseLengthY = Number(input[1]);
    let roofHeigthH = Number(input[2]);

    let greenPaintLittersM2 = 3.4;
    let redPaintLittersM2 = 4.3;

    let windowSide = 1.5;
    let windowArea = windowSide * windowSide;
    let sideWallArea = (houseHeightX * houseLengthY) * 2 - (windowArea * 2);
   
    let doorSideA = 1.2;
    let doorSideB = 2;
    let doorArea = doorSideA * doorSideB;
    let frontWallArea = (houseHeightX * houseHeightX) * 2 - doorArea;

    let houseArea = sideWallArea + frontWallArea;

    let greenPaintLitters = (houseArea / greenPaintLittersM2).toFixed(2);

    let roofArea = ((houseHeightX * houseLengthY) * 2 + (houseHeightX * roofHeigthH / 2) * 2);

    let redPaintLitters = (roofArea / redPaintLittersM2).toFixed(2);

    console.log(greenPaintLitters);
    console.log(redPaintLitters);

}
housePainting1([10.25, 15.45, 8.88]);