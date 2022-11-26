function fishTank(input){
    let lenght = Number(input[0]);
    let latitude = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3] / 100);

    let fishTankVolume = lenght * latitude * height;
    let fishTankVolumeLiters = fishTankVolume * 0.001;

    let neededLiters = fishTankVolumeLiters * (1 - percentage);

    console.log(neededLiters);

}
fishTank(["85 ", "75", "47", "17"]); 