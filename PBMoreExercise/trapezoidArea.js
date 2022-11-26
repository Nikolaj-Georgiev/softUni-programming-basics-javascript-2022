function trapezoidArea(input){
    let sideB1 = Number(input[0]);
    let sideB2 = Number(input[1]);
    let heightH = Number(input[2]);

    let area = ((sideB1 + sideB2) * heightH / 2).toFixed(2);

    console.log(area);

}
trapezoidArea([8, 13, 7]);