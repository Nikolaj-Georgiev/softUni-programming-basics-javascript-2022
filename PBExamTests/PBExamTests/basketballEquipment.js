function basketballEquipment(input) {
    let yearlyTax = Number(input[0]);

    let sneakersPrice = yearlyTax * 0.6;
    let bascketballOutfit = sneakersPrice * 0.8;
    let basketball = bascketballOutfit / 4;
    let accessories = basketball / 5;

    let neededMoney = yearlyTax + sneakersPrice + bascketballOutfit + basketball + accessories;

    console.log(neededMoney.toFixed(2));

}

basketballEquipment(["320"]);