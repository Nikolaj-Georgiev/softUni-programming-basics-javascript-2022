function vegetableMarket(input){
   let veggyKgPrice = Number(input[0]);
   let fruitKgPrice = Number(input[1]);
   let veggyTotalKg = Number(input[2]);
   let fruitTotalKg = Number(input[3]);

   let veggySum = veggyTotalKg * veggyKgPrice;
   let fruitSum = fruitTotalKg * fruitKgPrice;

   let totalSum = veggySum + fruitSum;
   let euro = 1 / 1.94;
   let totalSumEuro = (totalSum * euro).toFixed(2);
   
   console.log(totalSumEuro);

}
vegetableMarket([0.194, 19.4, 10, 10]);

function vegetableMarket1(input){
    let veggyKgPrice = Number(input[0]);
    let fruitKgPrice = Number(input[1]);
    let veggyTotalKg = Number(input[2]);
    let fruitTotalKg = Number(input[3]);
 
    let veggySum = veggyTotalKg * veggyKgPrice;
    let fruitSum = fruitTotalKg * fruitKgPrice;
 
    let totalSum = veggySum + fruitSum;
    let euro = 1 / 1.94;
    let totalSumEuro = (totalSum * euro).toFixed(2);
    
    console.log(totalSumEuro);
 
 }
 vegetableMarket1([1.5, 2.5, 10, 10]);