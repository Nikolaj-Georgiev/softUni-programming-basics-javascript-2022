function areaOfFigures(input){
    let figure = String(input[0]);
    if(figure == "square"){
        let side = parseFloat(input[1]);
        let area = (side * side).toFixed(3);
        console.log(area);
    }else if(figure == "rectangle"){
        let sideA = parseFloat(input[1]);
        let sideB = parseFloat(input[2]);
        let area = (sideA * sideB).toFixed(3);
        console.log(area);
    }else if(figure == "circle"){
        let radius = parseFloat(input[1]);
        let area = (Math.PI * (radius * radius)).toFixed(3);
        console.log(area);
    }else if(figure == "triangle"){
        let sideA = parseFloat(input[1]);
        let heightToSideA = parseFloat(input[2]);
        let area = ((1 / 2) * (sideA * heightToSideA)).toFixed(3);
        console.log(area);
    }

}
areaOfFigures(["triangle", "4.5", "20"]);   