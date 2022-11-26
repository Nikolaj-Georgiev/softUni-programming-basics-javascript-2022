function easterParty(input) {
    let guestsCount = Number(input[0]);
    let coverPerPerson = Number(input[1]);
    let budget = Number(input[2]);

    let cakePrice = budget * 0.1;

    if (guestsCount >= 10 && guestsCount <= 15) {
        coverPerPerson = coverPerPerson * 0.85;
    } else if (guestsCount > 15 && guestsCount <= 20) {
        coverPerPerson = coverPerPerson * 0.8;
    } else if (guestsCount > 20) {
        coverPerPerson = coverPerPerson * 0.75;
    }

    let partySum = guestsCount * coverPerPerson + cakePrice;

    let money = Math.abs(budget - partySum);

    if (budget >= partySum) {
        console.log(`It is party time! ${money.toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${money.toFixed(2)} leva needed.`);
    }

}
easterParty(["18", "30", "450"]);