function harvest(input) {
    let vineyardSqMeterX = Number(input[0]);
    let grapePerSqMeterY = Number(input[1]);
    let neededLitersWineZ = Number(input[2]);
    let workersCount = Number(input[3]);
    
    let grapeCount = vineyardSqMeterX * grapePerSqMeterY;
    let wineLiters = grapeCount * 0.4 / 2.5;

    let wine = Math.abs(neededLitersWineZ - wineLiters);
    let winePerPerson = wine / workersCount;

    if (wineLiters < neededLitersWineZ) {
        console.log(`It will be a tough winter! More ${Math.floor(wine)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineLiters)} liters.`);
        console.log(`${Math.ceil(wine)} liters left -> ${Math.ceil(winePerPerson)} liters per person.`);

    }

}

harvest([650, 2, 175, 3]);