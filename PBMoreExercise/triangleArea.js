function triangleArea(input){
    let sideA = Number(input[0]);
    let heightH = Number(input[1]);

    let area = (sideA * heightH / 2).toFixed(2);

    console.log(area);

}
triangleArea([20, 30]);

function triangleArea2(input){
    let sideA2 = Number(input[0]);
    let heightH2 = Number(input[1]);

    let area2 = (sideA2 * heightH2 / 2).toFixed(2);

    console.log(area2);

}
triangleArea2([1.23456, 4.56789]);