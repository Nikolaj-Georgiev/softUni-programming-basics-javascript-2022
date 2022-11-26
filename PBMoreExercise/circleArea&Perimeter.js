function circleAreaPerimeter(input){
    let radius = Number(input[0]);
    let circleArea = (Math.PI * Math.pow(radius, 2)).toFixed(2);
    let circlePerimeter = (2 * Math.PI * radius).toFixed(2);

    console.log(circleArea);
    console.log(circlePerimeter);

}
circleAreaPerimeter([3]);