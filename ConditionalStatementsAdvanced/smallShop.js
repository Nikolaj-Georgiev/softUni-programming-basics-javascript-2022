function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);

    let price = 0;
    if (town === "Sofia") {
        if (product === "beer"){
            price = 1.20;
            console.log(price * quantity);
        } else if(product === "peanuts") {
            price = 1.60;
            console.log(price * quantity);
        } else if (product === "sweets") {
            price = 1.45;
            console.log(price * quantity);
        } else if (product === "water") {
            price = 0.8;
            console.log(price * quantity);
        } else if (product === "coffee") {
            price = 0.5;
            console.log(price * quantity);
        } else {
            console.log("unknown product");
        }
    } else if (town === "Plovdiv") {
        if (product === "beer"){
            price = 1.15;
            console.log(price * quantity);
        } else if(product === "peanuts") {
            price = 1.50;
            console.log(price * quantity);
        } else if (product === "sweets") {
            price = 1.3;
            console.log(price * quantity);
        } else if (product === "water") {
            price = 0.7;
            console.log(price * quantity);
        } else if (product === "coffee") {
            price = 0.4;
            console.log(price * quantity);
        } else {
            console.log("unknown product");
        }
    } else if (town === "Varna") {
        if (product === "beer"){
            price = 1.10;
            console.log(price * quantity);
        } else if(product === "peanuts") {
            price = 1.55;
            console.log(price * quantity);
        } else if (product === "sweets") {
            price = 1.35;
            console.log(price * quantity);
        } else if (product === "water") {
            price = 0.7;
            console.log(price * quantity);
        } else if (product === "coffee") {
            price = 0.45;
            console.log(price * quantity);
        } else {
            console.log("unknown product");
        }
    } else {
        console.log("unknown town");
    }

}

smallShop(["beer", "Sofia", "2"]);