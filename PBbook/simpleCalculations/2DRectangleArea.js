function twoDRectangleArea(input) {
    let x1 = parseFloat(input[0]);
    let y1 = parseFloat(input[1]);
    let x2 = parseFloat(input[2]);
    let y2 = parseFloat(input[3]);

    let width = Math.max(x1, x2) - Math.min(x1, x2);
    let height = Math.abs(y1 - y2);

    console.log(width * height);
    console.log(2 * (width + height));

}
twoDRectangleArea([60, 20, 10, 50]);