function familyTrip(input){
    let budget = Number(input[0]);
    let NightsCount = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let addExpencesPercent = Number(input[3]);

    let accomodation = NightsCount * pricePerNight;
    let addExpences = budget * (addExpencesPercent /100);

    if (NightsCount > 7) {
        accomodation = accomodation * 0.95;
    }

    let tripSum = accomodation + addExpences;
    let money = 0;

    if (budget >= tripSum) {
        money = budget - tripSum;
        console.log(`Ivanovi will be left with ${money.toFixed(2)} leva after vacation.`);
    } else {
        money = tripSum - budget;
        console.log(`${money.toFixed(2)} leva needed.`);
    } 

}

familyTrip([500, 7, 66, 15]);

function familyTrip1(input){
    let budget = Number(input[0]);
    let NightsCount = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let addExpencesPercent = Number(input[3]);

    let accomodation = NightsCount * pricePerNight;
    let addExpences = budget * (addExpencesPercent /100);

    if (NightsCount > 7) {
        accomodation = accomodation * 0.95;
    }

    let tripSum = accomodation + addExpences;
    let money = Math.abs(budget - tripSum);

    if (budget >= tripSum) {
        console.log(`Ivanovi will be left with ${money.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${money.toFixed(2)} leva needed.`);
    }
    
}

familyTrip1([800.50, 8, 100, 2]);