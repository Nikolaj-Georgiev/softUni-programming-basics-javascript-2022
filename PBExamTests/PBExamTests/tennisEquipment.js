function tennisEquipment(input) {
    let rocketPrice = Number(input[0]);
    let rocketsCount = Number(input[1]);
    let sneakersCount = Number(input[2]);

    let sneakersPrice = rocketPrice / 6;

    let rocketSum = rocketsCount * rocketPrice;
    let sneakersSum = sneakersCount * sneakersPrice;
    let othersSum = (rocketSum + sneakersSum) * 0.2;

    let totalSum = rocketSum + sneakersSum + othersSum;

    let shareDjokovic = totalSum / 8;
    let shareSponsor = totalSum * 7/8;

    console.log(`Price to be paid by Djokovic ${Math.floor(shareDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(shareSponsor)}`);

}

tennisEquipment([850, 4, 2]);