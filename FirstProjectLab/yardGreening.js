function yardGreening(input){
/*На конзолата се отпечатват два реда:
•	"The final price is: {крайна цена на услугата} lv."
•	"The discount is: {отстъпка} lv." */

    let yard = Number(input[0]);
    let priceSqareMeter = 7.61;
    let priceForGreening = yard * priceSqareMeter;
    let discount = priceForGreening * 0.18;

    let finalPrice = priceForGreening - discount;

    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}
yardGreening(["550"]);