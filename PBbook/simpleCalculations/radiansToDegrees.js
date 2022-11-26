function radiansToDegrees(input) {
    let rad = parseFloat(input[0]);
    let deg = Math.round(rad * 180 / Math.PI);

    console.log(deg);

}
radiansToDegrees(["3.1416"])