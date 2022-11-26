function fuelTank(input) {
    let fuelTipe = input[0];
    let fuelLitters = Number(input[1]);

    let fuel = 0;
    if (fuelTipe === "Diesel"){
        fuel = "diesel";

    } else if (fuelTipe === "Gasoline") {
        fuel = "gasoline";
    } else if (fuelTipe === "Gas") {
        fuel = "gas";
    }

    if (!((fuelTipe == "Diesel") || (fuelTipe == "Gasoline") || (fuelTipe == "Gas"))) {
        console.log("Invalid fuel!");
    } else if (fuelLitters < 25) {
        if (fuelTipe === "Diesel") {
            console.log(`Fill your tank with ${fuel}!`);
        } else if (fuelTipe === "Gasoline") {
            console.log(`Fill your tank with ${fuel}!`);
        } else {
            console.log(`Fill your tank with ${fuel}!`);
        }
    } else {
        console.log(`You have enough ${fuel}.`);
    }

}

fuelTank(["Gasoline", "10"]);