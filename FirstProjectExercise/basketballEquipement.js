function basketballEquipement(input){
    let yarlyTax = Number(input[0]);

    let sneakers = yarlyTax - (yarlyTax * 0.4);
    let apparel = sneakers * 0.8;
    let ball = apparel / 4;
    let accessories = ball / 5;

    let totalSum = yarlyTax + sneakers + apparel + ball + accessories; 

    console.log(totalSum);

}
basketballEquipement(["365"]);