function repainting(input){

    let nylonSqM = Number(input[0]);
    let paintLit = Number(input[1]);
    let tinnerLit = Number(input[2]);
    let workingHours = Number(input[3]);

    let nylonSum = (nylonSqM + 2) * 1.50;
    let paintSum = (paintLit * 1.1) * 14.50;
    let tinnerSum = tinnerLit * 5;

    let matsSum = nylonSum + paintSum + tinnerSum + 0.40;
    let workersSum = (matsSum * 0.3) * workingHours;

    let totalSum = matsSum + workersSum;

    console.log(totalSum);

}
repainting(["5", "10", "10", "1"]);