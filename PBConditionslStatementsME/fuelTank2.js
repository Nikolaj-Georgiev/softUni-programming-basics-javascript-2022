function fuelTank2(input) {
    let fuelTipe = input[0];
    let fuelLitters = Number(input[1]);
    let card = input[2];

    let gasoline = 2.22;
    let diesel = 2.33;
    let gas = 0.93;

    if (card === "Yes"){
        gasoline = gasoline - 0.18;
        diesel = diesel - 0.12;
        gas = gas - 0.08;
    }

    let fuelPrice = 0;
    if (fuelTipe === "Gas") {
        fuelPrice = fuelLitters * gas;
    } else if (fuelTipe === "Gasoline") {
        fuelPrice = fuelLitters * gasoline;
    } else if (fuelTipe === "Diesel") {
        fuelPrice = fuelLitters * diesel;
    }

    if (fuelLitters > 25) {
        fuelPrice = fuelPrice * 0.9;
    } else if (fuelLitters >= 20 && fuelLitters <= 25) {
        fuelPrice = fuelPrice * 0.92;
    }

    console.log(`${fuelPrice.toFixed(2)} lv.`);

}

fuelTank2(["Gas", "30", "Yes"]);