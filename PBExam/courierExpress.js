function courierExpress(input) {

    let packageWeight = Number(input[0]);
    let serviceType = input[1];
    let distanceKm = Number(input[2]);

    let priceOfDelivery = 0;
    let overcharge = 0;

    switch (serviceType) {
        case "standard":
            if (packageWeight < 1) {
                priceOfDelivery = distanceKm * 0.03;
            } else if (packageWeight >= 1 && packageWeight < 10) {
                priceOfDelivery = distanceKm * 0.05;
            } else if (packageWeight >= 10 && packageWeight < 40) {
                priceOfDelivery = distanceKm * 0.10;
            } else if (packageWeight >= 40 && packageWeight < 90) {
                priceOfDelivery = distanceKm * 0.15;
            } else if (packageWeight >= 90 && packageWeight < 150) {
                priceOfDelivery = distanceKm * 0.20;
            }
            break;
        case "express":
            if (packageWeight < 1) {
                priceOfDelivery = distanceKm * 0.03;
                overcharge = distanceKm * (0.03 * 1.80);
                priceOfDelivery += (distanceKm * overcharge);
            } else if (packageWeight >= 1 && packageWeight < 10) {
                priceOfDelivery = distanceKm * 0.05;
                overcharge = distanceKm * (0.05 * 1.40);
                priceOfDelivery += (distanceKm * overcharge);
            } else if (packageWeight >= 10 && packageWeight < 40) {
                priceOfDelivery = distanceKm * 0.10;
                overcharge = distanceKm * (0.10 * 1.05);
                priceOfDelivery += (distanceKm * overcharge);
            } else if (packageWeight >= 40 && packageWeight < 90) {
                priceOfDelivery = distanceKm * 0.15;
                overcharge = packageWeight * (0.15 * 0.02);
                priceOfDelivery += (distanceKm * overcharge);
            } else if (packageWeight >= 90 && packageWeight < 150) {
                priceOfDelivery = distanceKm * 0.20;
                overcharge = distanceKm * (0.20 * 1.01);
                priceOfDelivery += (distanceKm * overcharge);
            }
            break;

    }

    console.log(`The delivery of your shipment with weight of ${packageWeight.toFixed(3)} kg. would cost ${priceOfDelivery.toFixed(2)} lv.`);

}
courierExpress(["150",
    "standard",
    "349"
]);