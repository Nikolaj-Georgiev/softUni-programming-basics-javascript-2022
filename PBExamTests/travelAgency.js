function travelAgency(input) {
    let cityName = input[0];
    let packageType = input[1];
    let vipCard = input[2];
    let daysCount = Number(input[3]);

    let dayPrice = 0;
    let moneySpend = 0;



    if (!(cityName === "Bansko" || cityName === "Borovets" || cityName === "Varna" || cityName === "Burgas")) {
        console.log("Invalid input!");
    }
    if (!(packageType === "noEquipment" || packageType === "withEquipment" || packageType === "noBreakfast" || packageType === "withBreakfast")) {
        console.log("Invalid input!");
    }


    switch (cityName) {
        case "Bansko":
        case "Borovets":
            if (daysCount < 1) {
                console.log("Days must be positive number!");
            } else if (packageType === "noEquipment") {
                dayPrice = 80;
                if (vipCard === "yes") {
                    dayPrice = dayPrice * 0.95;
                }
                moneySpend = dayPrice * daysCount;

                if (daysCount > 7) {
                    moneySpend = moneySpend - dayPrice;
                }

                console.log(`The price is ${moneySpend.toFixed(2)}lv! Have a nice time!`);

            } else if (packageType === "withEquipment") {
                dayPrice = 100;
                if (vipCard === "yes") {
                    dayPrice = dayPrice * 0.90;
                }
                moneySpend = dayPrice * daysCount;

                if (daysCount > 7) {
                    moneySpend = moneySpend - dayPrice;
                }

                console.log(`The price is ${moneySpend.toFixed(2)}lv! Have a nice time!`);
            }
            break;
        case "Varna":
        case "Burgas":
            if (daysCount < 1) {
                console.log("Days must be positive number!");
            } else if (packageType === "noBreakfast") {
                dayPrice = 100;
                if (vipCard === "yes") {
                    dayPrice = dayPrice * 0.93;
                }
                moneySpend = dayPrice * daysCount;

                if (daysCount > 7) {
                    moneySpend = moneySpend - dayPrice;
                }

                console.log(`The price is ${moneySpend.toFixed(2)}lv! Have a nice time!`);
            } else if (packageType === "withBreakfast") {
                dayPrice = 130;
                if (vipCard === "yes") {
                    dayPrice = dayPrice * 0.88;
                }
                moneySpend = dayPrice * daysCount;

                if (daysCount > 7) {
                    moneySpend = moneySpend - dayPrice;
                }

                console.log(`The price is ${moneySpend.toFixed(2)}lv! Have a nice time!`);

            }
            break;




    }


}

travelAgency(["Burgas", "noBreakfast", "no", "4"]);