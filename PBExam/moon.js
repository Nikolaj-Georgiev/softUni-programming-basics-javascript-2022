function moon(input) {

    let speedKmHour = Number(input[0]);
    let fuelConsumption100Km = Number(input[1]);

    let distanceToTheMoon = 384400;
    let timeSpendOnTheMoon = 3;
    let totalDistance = distanceToTheMoon * 2;

    let travelTime = Math.ceil(totalDistance / speedKmHour);
    let totalTime = travelTime + timeSpendOnTheMoon;

    let littersFuelNeeded = (fuelConsumption100Km * totalDistance) / 100;

    console.log(`${totalTime}`);
    console.log(`${littersFuelNeeded}`);



}
moon(["15000",
    "4"
]);