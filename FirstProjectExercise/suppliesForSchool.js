function suppliesForSchool(input){
    let penPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let cleanerLiters = Number(input[2]);
    let discount = Number(input[3]);

    let priceForPens = penPacks * 5.80;
    let priceForMarkers = markerPacks * 7.20;
    let priceForCleaner = cleanerLiters * 1.20;

    let totalPrice = priceForPens + priceForMarkers + priceForCleaner;
    let totalPriceWithDiscount = totalPrice - (totalPrice * discount / 100);

    console.log(totalPriceWithDiscount);

}
suppliesForSchool(["4", "2", "5", "13"]);