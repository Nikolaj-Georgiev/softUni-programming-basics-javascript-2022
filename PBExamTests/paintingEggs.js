function paintingEggs(input) {
    let eggSize = input[0];
    let eggColor = input[1];
    let batchCount = Number(input[2]);

    let batchPrice = 0;
    let batchIncome = 0;
    let expenses = 0;
    let profit = 0;

    switch (eggSize) {
        case "Large":
            switch (eggColor) {
                case "Red":
                    batchPrice = 16;
                    batchIncome = batchCount * batchPrice;
                    expenses = batchIncome * 0.35;
                    profit = batchIncome - expenses;
                    console.log(`${profit.toFixed(2)} leva.`);
                    break;
                case "Green":
                    batchPrice = 12;
                    batchIncome = batchCount * batchPrice;
                    expenses = batchIncome * 0.35;
                    profit = batchIncome - expenses;
                    console.log(`${profit.toFixed(2)} leva.`);
                    break;
                case "Yellow":
                    batchPrice = 9;
                    batchIncome = batchCount * batchPrice;
                    expenses = batchIncome * 0.35;
                    profit = batchIncome - expenses;
                    console.log(`${profit.toFixed(2)} leva.`);
                    break;
            }
            break;
        case "Medium":
            switch (eggColor) {
                case "Red":
                    batchPrice = 13;
                    batchIncome = batchCount * batchPrice;
                    expenses = batchIncome * 0.35;
                    profit = batchIncome - expenses;
                    console.log(`${profit.toFixed(2)} leva.`);
                    break;
                case "Green":
                    batchPrice = 9;
                    batchIncome = batchCount * batchPrice;
                    expenses = batchIncome * 0.35;
                    profit = batchIncome - expenses;
                    console.log(`${profit.toFixed(2)} leva.`);
                    break;
                case "Yellow":
                    batchPrice = 7;
                    batchIncome = batchCount * batchPrice;
                    expenses = batchIncome * 0.35;
                    profit = batchIncome - expenses;
                    console.log(`${profit.toFixed(2)} leva.`);
                    break;
            }
            break;
        case "Small":
            switch (eggColor) {
                case "Red":
                    batchPrice = 9;
                    batchIncome = batchCount * batchPrice;
                    expenses = batchIncome * 0.35;
                    profit = batchIncome - expenses;
                    console.log(`${profit.toFixed(2)} leva.`);
                    break;
                case "Green":
                    batchPrice = 8;
                    batchIncome = batchCount * batchPrice;
                    expenses = batchIncome * 0.35;
                    profit = batchIncome - expenses;
                    console.log(`${profit.toFixed(2)} leva.`);
                    break;
                case "Yellow":
                    batchPrice = 5;
                    batchIncome = batchCount * batchPrice;
                    expenses = batchIncome * 0.35;
                    profit = batchIncome - expenses;
                    console.log(`${profit.toFixed(2)} leva.`);
                    break;
            }
            break;

    }


}

paintingEggs(["Medium", "Green", "5"]);