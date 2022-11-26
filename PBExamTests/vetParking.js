function vetParking(input) {
    let daysCount = Number(input[0]);
    let hoursCount = Number(input[1]);

    let counter = 0;
    let totalParkingTax = 0;

    for (let i = 1; i <= daysCount; i++) {
        counter++;
        let dailyTax = 0;
        if (i % 2 !== 0) {
            for (let j = 1; j <= hoursCount; j++) {
                if (j % 2 !== 0) {
                    dailyTax += 1;

                } else {
                    dailyTax += 1.25;
                }
            }
        } else {
            for (let k = 1; k <= hoursCount; k++) {
                if (k % 2 !== 0) {
                    dailyTax += 2.50;

                } else {
                    dailyTax += 1;
                }
            }
        }
        totalParkingTax += dailyTax;
        console.log(`Day: ${counter} - ${dailyTax.toFixed(2)} leva`);
    }

    console.log(`Total: ${totalParkingTax.toFixed(2)} leva`)

}
vetParking(["5",
    "2"
]);