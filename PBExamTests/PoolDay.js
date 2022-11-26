function poolDay(input){
    let people = Number(input[0]);
    let entryTax = Number(input[1]);
    let sunbed = Number(input[2]);
    let umbrela = Number(input[3]);

    let priceForEntry = people * entryTax;
    let neededSunbeds = Math.ceil(people * 0.75);
    let sunbedsPrice = neededSunbeds * sunbed;
    let neededUmbrelas = Math.ceil(people * 0.5);
    let umbrelaPrice = neededUmbrelas * umbrela;

    let totalSum = (priceForEntry + sunbedsPrice + umbrelaPrice).toFixed(2);

    console.log(`${totalSum} lv.`);

}
poolDay(["50", "6", "8", "4"]);