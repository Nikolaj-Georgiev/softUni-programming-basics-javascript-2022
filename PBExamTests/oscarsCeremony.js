function oscarsCeremony(input) {
    let hallPrice = Number(input[0]);
    let figurinePrice = hallPrice * 0.70;
    let ketteringPrice = figurinePrice * 0.85;
    let dubbingPrice = ketteringPrice / 2;

    let totalExpencesSum = hallPrice + figurinePrice + ketteringPrice + dubbingPrice;

    console.log(totalExpencesSum.toFixed(2));

}

oscarsCeremony(["5555"]);