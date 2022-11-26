function cinema(input) {
    let typeProjection = String(input[0]);
    let rollsCount = Number(input[1]);
    let columnsCount = Number(input[2]);

    let totalSeats = rollsCount * columnsCount;

    let money = 0;

    if (typeProjection === "Premiere") {
        money = totalSeats * 12;
        console.log(`${money.toFixed(2)} leva`);
    } else if (typeProjection === "Normal") {
        money = totalSeats * 7.5;
        console.log(`${money.toFixed(2)} leva`);
    } else if (typeProjection === "Discount") {
        money = totalSeats * 5;
        console.log(`${money.toFixed(2)} leva`);
    }

}

cinema(["Premiere", "10", "12"]);