function energyBooster(input) {
    let fruitType = input[0];
    let sizeType = input[1];
    let boosterCount = Number(input[2]);

    let boosterPrice = 0;
    let totalBoosterPrice = 0;

    switch (fruitType) {
        case "Watermelon":
            switch (sizeType) {
                case "small":
                    boosterPrice = 56;
                    totalBoosterPrice = (boosterCount * boosterPrice) * 2;
                    if (totalBoosterPrice > 1000) {
                        totalBoosterPrice = totalBoosterPrice * 0.50;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice >= 400) {
                        totalBoosterPrice = totalBoosterPrice * 0.85;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice < 400) {
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    }
                    break;
                case "big":
                    boosterPrice = 28.70;
                    totalBoosterPrice = (boosterCount * boosterPrice) * 5;
                    if (totalBoosterPrice > 1000) {
                        totalBoosterPrice = totalBoosterPrice * 0.50;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice >= 400) {
                        totalBoosterPrice = totalBoosterPrice * 0.85;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice < 400) {
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    }
                    break;
            }
            break;
        case "Mango":
            switch (sizeType) {
                case "small":
                    boosterPrice = 36.66;
                    totalBoosterPrice = (boosterCount * boosterPrice) * 2;
                    if (totalBoosterPrice > 1000) {
                        totalBoosterPrice = totalBoosterPrice * 0.50;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice >= 400) {
                        totalBoosterPrice = totalBoosterPrice * 0.85;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice < 400) {
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    }
                    break;
                case "big":
                    boosterPrice = 19.60;
                    totalBoosterPrice = (boosterCount * boosterPrice) * 5;
                    if (totalBoosterPrice > 1000) {
                        totalBoosterPrice = totalBoosterPrice * 0.50;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice >= 400) {
                        totalBoosterPrice = totalBoosterPrice * 0.85;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice < 400) {
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    }
                    break;
            }
            break;
        case "Pineapple":
            switch (sizeType) {
                case "small":
                    boosterPrice = 42.10;
                    totalBoosterPrice = (boosterCount * boosterPrice) * 2;
                    if (totalBoosterPrice > 1000) {
                        totalBoosterPrice = totalBoosterPrice * 0.50;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice >= 400) {
                        totalBoosterPrice = totalBoosterPrice * 0.85;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice < 400) {
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    }
                    break;
                case "big":
                    boosterPrice = 24.80;
                    totalBoosterPrice = (boosterCount * boosterPrice) * 5;
                    if (totalBoosterPrice > 1000) {
                        totalBoosterPrice = totalBoosterPrice * 0.50;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice >= 400) {
                        totalBoosterPrice = totalBoosterPrice * 0.85;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice < 400) {
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    }
                    break;
            }
            break;
        case "Raspberry":
            switch (sizeType) {
                case "small":
                    boosterPrice = 20;
                    totalBoosterPrice = (boosterCount * boosterPrice) * 2;
                    if (totalBoosterPrice > 1000) {
                        totalBoosterPrice = totalBoosterPrice * 0.50;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice >= 400) {
                        totalBoosterPrice = totalBoosterPrice * 0.85;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice < 400) {
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    }
                    break;
                case "big":
                    boosterPrice = 15.20;
                    totalBoosterPrice = (boosterCount * boosterPrice) * 5;
                    if (totalBoosterPrice > 1000) {
                        totalBoosterPrice = totalBoosterPrice * 0.50;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice >= 400) {
                        totalBoosterPrice = totalBoosterPrice * 0.85;
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    } else if (totalBoosterPrice < 400) {
                        console.log(`${totalBoosterPrice.toFixed(2)} lv.`);
                    }
                    break;
            }
            break;
    }
}

energyBooster(["Pineapple", "small", "1"]);