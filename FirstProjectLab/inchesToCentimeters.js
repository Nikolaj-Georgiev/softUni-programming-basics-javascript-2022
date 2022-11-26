function inchesToCentimeters(input){
    let inches = Number(input[0]);
    let coefficient = Number(2.54);
    let centimeters = inches * coefficient;

    console.log(centimeters);

}
inchesToCentimeters(["5"]);