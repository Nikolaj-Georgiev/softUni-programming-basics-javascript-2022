function easterBakery(input) {
    let flourPriceKg = Number(input[0]);
    let flourKg = Number(input[1]);
    let sugarKg = Number(input[2]);
    let dozensEggs = Number(input[3]);
    let yeastPacks = Number(input[4]);

    let sugarPriceKg = flourPriceKg * 0.75;
    let dozensEggsPrice = flourPriceKg * 1.1;
    let yeastPackPrice = sugarPriceKg * 0.2;

    let productsSum = flourKg * flourPriceKg + sugarKg * sugarPriceKg + dozensEggs * dozensEggsPrice + yeastPacks * yeastPackPrice;

    console.log(productsSum.toFixed(2));

}
easterBakery(["50", "10", "3.5", "6", "1"]);
