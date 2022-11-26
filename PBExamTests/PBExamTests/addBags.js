function addBags(input) {
    let bagsPriceOver20Kg = Number(input[0]);
    let bagsKg = Number(input[1]);
    let daysTillTravel = Number(input[2]);
    let bagsCount = Number(input[3]);

    let bagsTax = 0;

    if (bagsKg < 10) {
        bagsTax = bagsPriceOver20Kg * 0.2;
    } else if (bagsKg > 20) {
        bagsTax = bagsPriceOver20Kg;
    } else {
        bagsTax = bagsPriceOver20Kg / 2;
    }

    if (daysTillTravel > 30) {
        bagsTax = bagsTax * 1.1;
    } else if (daysTillTravel < 7) {
        bagsTax = bagsTax * 1.4;
    } else {
        bagsTax = bagsTax * 1.15;
    }

    let bagsMoney = bagsCount * bagsTax;

    console.log(`The total price of bags is: ${bagsMoney.toFixed(2)} lv. `);

}
addBags(["30", "18", "15", "2"]);
