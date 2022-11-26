function trapezoidArea([arg1, arg2, arg3]) {
    let a = parseFloat(arg1);
    let b = parseFloat(arg2);
    let h = parseFloat(arg3);
    let area = (a + b) * h / 2;
    console.log("Trapezoid area = " + area);

}
trapezoidArea([3, 4, 5]);

function printTrapezoidArea(input) {
    let a1 = Number(input[0]);
    let b1 = Number(input[1]);
    let h1 = Number(input[2]);
    let area1 = (a1 + b1) * h1 / 2;
    console.log(`Trapezoid area = ${area1}`);
}
printTrapezoidArea(["3", "4", "5"]);