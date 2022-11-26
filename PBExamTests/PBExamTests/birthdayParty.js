function birthdayParty(input) {
    let hallRent = Number(input[0]);

    let cakePrice = hallRent * 0.2;
    let drinksPrice = cakePrice * 0.55;
    let animator = hallRent / 3;

    let budget = hallRent + cakePrice + drinksPrice + animator;

    console.log(budget);

}

birthdayParty(["3720"]);