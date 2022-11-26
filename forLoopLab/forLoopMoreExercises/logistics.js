function logistics(input) {
    let loadsCount = Number(input[0]);

    let microbus = 0;
    let truck = 0;
    let train = 0;

    let loadsTotalTons = 0;

    for (let i = 1; i <= loadsCount; i++) {
        loadsTotalTons += Number(input[i]);
        if (Number(input[i]) <= 3) {
            microbus += Number(input[i]);
        } else if (Number(input[i]) <= 11) {
            truck += Number(input[i]);
        } else if (Number(input[i]) >= 12) {
            train += Number(input[i]);
        }

    }

    let averageTonPrice = (microbus * 200 + truck * 175 + train * 120) / loadsTotalTons;
    let microbusPercentage = (microbus / loadsTotalTons) * 100;
    let truckPercentage = (truck / loadsTotalTons) * 100;
    let trainPercentage = (train / loadsTotalTons) * 100;

    console.log(averageTonPrice.toFixed(2))
    console.log(`${microbusPercentage.toFixed(2)}%`)
    console.log(`${truckPercentage.toFixed(2)}%`)
    console.log(`${trainPercentage.toFixed(2)}%`)

}

logistics(["5", "2", "10", "20", "1", "7"]);