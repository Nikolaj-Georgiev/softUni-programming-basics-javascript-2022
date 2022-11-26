function tradeCommissions(input) {
    let city = String(input[0]);
    let salesVolume = Number(input[1]);

    let commission = 0;

    if ((city === "Sofia" || city === "Plovdiv" || city === "Varna") && salesVolume > 0) {

        if (city === "Sofia") {
            if (salesVolume >= 0 && salesVolume <= 500) {
                commission = salesVolume * 0.05;
                console.log(commission.toFixed(2));
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                commission = salesVolume * 0.07;
                console.log(commission.toFixed(2));
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                commission = salesVolume * 0.08;
                console.log(commission.toFixed(2));
            } else {
                commission = salesVolume * 0.12;
                console.log(commission.toFixed(2));
            }
        } else if (city === "Plovdiv") {
            if (salesVolume >= 0 && salesVolume <= 500) {
                commission = salesVolume * 0.055;
                console.log(commission.toFixed(2));
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                commission = salesVolume * 0.08;
                console.log(commission.toFixed(2));
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                commission = salesVolume * 0.12;
                console.log(commission.toFixed(2));
            } else {
                commission = salesVolume * 0.145;
                console.log(commission.toFixed(2));
            }
        } else if (city === "Varna") {
            if (salesVolume >= 0 && salesVolume <= 500) {
                commission = salesVolume * 0.045;
                console.log(commission.toFixed(2));
            } else if (salesVolume > 500 && salesVolume <= 1000) {
                commission = salesVolume * 0.075;
                console.log(commission.toFixed(2));
            } else if (salesVolume > 1000 && salesVolume <= 10000) {
                commission = salesVolume * 0.10;
                console.log(commission.toFixed(2));
            } else {
                commission = salesVolume * 0.13;
                console.log(commission.toFixed(2));
            }
        }

    } else {
        console.log("error");
    }


}

tradeCommissions(["Sofia", "1500"]);