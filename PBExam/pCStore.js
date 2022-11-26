function pCStore(input) {

    let processorPrice = Number(input[0]);
    let videoCardPrice = Number(input[1]);
    let ramPrice = Number(input[2]);
    let ramCount = Number(input[3]);
    let discountPercentage = Number(input[4]);

    let discountedProcessor = processorPrice - (processorPrice * discountPercentage);
    let discountedVideoCard = videoCardPrice - (videoCardPrice * discountPercentage);

    let ramTotalPrice = ramCount * ramPrice;

    let totalDollars = discountedProcessor + discountedVideoCard + ramTotalPrice;
    let totalSumInLeva = totalDollars * 1.57;

    console.log(`Money needed - ${totalSumInLeva.toFixed(2)} leva.`);

}
pCStore([
    "500",
    "200",
    "80",
    "2",
    "0.05"
]);