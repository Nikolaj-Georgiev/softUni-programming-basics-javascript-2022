function foodDelivery(input){

    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let veggyMenus = Number(input[2]);

    let chickenMenusPrice = chickenMenus * 10.35;
    let fishMenusPrice = fishMenus * 12.40;
    let veggyMenusPrice = veggyMenus * 8.15;
    let dessertPrice = (chickenMenusPrice + fishMenusPrice + veggyMenusPrice) * 0.2;

    let totalSum = chickenMenusPrice + fishMenusPrice + veggyMenusPrice + dessertPrice + 2.50;

    console.log(totalSum);

}
foodDelivery(["9", "2", "6"]);