function courierExpressTwo(input) {

    let packageWeight = Number(input[0]);
    let serviceType = input[1];
    let distanceKm = Number(input[2]);
    let transportCost = 0;
    let overCharge = 0;
    let overChargeKg = 0;
    let totalOvercharge = 0;
    let finalPrice = 0;

    if (packageWeight < 1 && packageWeight > 0) {
        transportCost = distanceKm * 0.03;
    } else if (packageWeight >= 1 && packageWeight < 10) {
        transportCost = distanceKm * 0.05;
    } else if (packageWeight >= 10 && packageWeight < 40) {
        transportCost = distanceKm * 0.10;
    } else if (packageWeight >= 40 && packageWeight < 90) {
        transportCost = distanceKm * 0.15;
    } else if (packageWeight >= 90 && packageWeight < 150) {
        transportCost = distanceKm * 0.20;
    }

    if (serviceType === "express") {
        if (packageWeight < 1 && packageWeight > 0) {
            overCharge = 0.03 * 0.80;
            overChargeKg = packageWeight * overCharge;
        } else if (packageWeight >= 1 && packageWeight < 10) {
            overCharge = 0.05 * 0.40;
            overChargeKg = packageWeight * overCharge;
        } else if (packageWeight >= 10 && packageWeight < 40) {
            overCharge = 0.10 * 0.05;
            overChargeKg = packageWeight * overCharge;
        } else if (packageWeight >= 40 && packageWeight < 90) {
            overCharge = 0.15 * 0.02;
            overChargeKg = packageWeight * overCharge;
        } else if (packageWeight >= 90 && packageWeight < 150) {
            overCharge = 0.20 * 0.01;
            overChargeKg = packageWeight * overCharge;
        }
    }

    totalOvercharge = distanceKm * overChargeKg;
    finalPrice = transportCost + totalOvercharge

    console.log(`The delivery of your shipment with weight of ${packageWeight.toFixed(3)} kg. would cost ${finalPrice.toFixed(2)} lv.`);


}
courierExpressTwo([
    "87",
    "express",
    "130"
]);