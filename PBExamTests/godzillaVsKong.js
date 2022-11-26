function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let extrasCount = Number(input[1]);
    let outfitSinflePrice = Number(input[2]);

    let scenery =  budget * 0.10;
    let outfitSum = extrasCount * outfitSinflePrice;

    if (extrasCount > 150) {
        outfitSum = outfitSum * 0.90;
    }

    let totalSum = scenery + outfitSum;
    let money = Math.abs(budget - totalSum);

    if (totalSum > budget) { 
        console.log("Not enough money!");
        console.log(`Wingard needs ${money.toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${money.toFixed(2)} leva left.`);
    }

}

godzillaVsKong(["20000", "120", "55.5"]);
