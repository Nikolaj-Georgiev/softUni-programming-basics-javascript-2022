function currencyConverter(input) {

    let amountMoney = parseFloat(input[0]);
    let moneyToConvert = input[1];
    let convertedMoney = input[2];
    let changedMoney = 0;

    switch (moneyToConvert) {
        case "USD":
            switch (convertedMoney) {
                case "BGN":
                    changedMoney = amountMoney * 1.79549;
                    break;
                case "EUR":
                    changedMoney = amountMoney * 1.79549;
                    changedMoney = changedMoney / 1.95583;
                    break;
                case "GBP":
                    changedMoney = amountMoney * 1.79549;
                    changedMoney = changedMoney / 2.53405;
                    break;
            }
            break;
        case "BGN":
            switch (convertedMoney) {
                case "USD":
                    changedMoney = amountMoney / 1.79549;
                    break;
                case "EUR":
                    changedMoney = amountMoney / 1.95583;
                    break;
                case "GBP":
                    changedMoney = amountMoney / 2.53405;
                    break;
            }
            break;
        case "EUR":
            switch (convertedMoney) {
                case "BGN":
                    changedMoney = amountMoney * 1.95583;
                    break;
                case "USD":
                    changedMoney = amountMoney * 1.95583;
                    changedMoney = changedMoney / 1.79549;
                    break;
                case "GBP":
                    changedMoney = amountMoney * 1.95583;
                    changedMoney = changedMoney / 2.53405;
                    break;
            }
            break;
        case "GBP":
            switch (convertedMoney) {
                case "BGN":
                    changedMoney = amountMoney * 2.53405;
                    break;
                case "USD":
                    changedMoney = amountMoney * 2.53405;
                    changedMoney = changedMoney / 1.79549;
                    break;
                case "EUR":
                    changedMoney = amountMoney * 2.53405;
                    changedMoney = changedMoney / 1.95583;
                    break;
            }
            break;
    }

    console.log(`${changedMoney.toFixed(2)} ${convertedMoney}`);

}
currencyConverter(["100", "BGN", "EUR"]);