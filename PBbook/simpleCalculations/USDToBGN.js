function USDToBGN(input) {
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;

    console.log(`${bgn.toFixed(2)} BGN`)

}
USDToBGN(["20"]);