function fishland(input){
let makerelPrice = Number(input[0]);
let spratPrice = Number(input[1]);
let bonitoKg = Number(input[2]);
let scadKG = Number(input[3]);
let musselsKg = Number(input[4]);

let bonitoPrice = makerelPrice + (makerelPrice * 0.6);
let scadPrice = spratPrice + (spratPrice * 0.8);
let musselsPrice = 7.50;

let totalDinnerSum =((bonitoKg * bonitoPrice) + (scadKG * scadPrice) + (musselsKg * musselsPrice)).toFixed(2);

console.log(totalDinnerSum);

}
fishland([6.90, 4.20, 1.5, 2.5, 1]);