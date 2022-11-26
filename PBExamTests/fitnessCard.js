function fitnessCard(input) {
    let budget = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let cardPrice = 0;
    let money = 0;

    switch (sport) {
        case "Gym":
            switch (gender) {
                case "m":
                    cardPrice = 42;
                    if (age <= 19) {
                        cardPrice = cardPrice * 0.8;
                    }
                    money = Math.abs(budget - cardPrice);
                    if (budget >= cardPrice) {
                        console.log(`You purchased a 1 month pass for ${sport}.`);
                    } else if (budget < cardPrice) {
                        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`);
                    }
                    break;
                case "f":
                    cardPrice = 35;
                    if (age <= 19) {
                        cardPrice = cardPrice * 0.8;
                    }
                    money = Math.abs(budget - cardPrice);
                    if (budget >= cardPrice) {
                        console.log(`You purchased a 1 month pass for ${sport}.`);
                    } else if (budget < cardPrice) {
                        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`);
                    }
                    break;
            }
            break;
        case "Boxing":
            switch (gender) {
                case "m":
                    cardPrice = 41;
                    if (age <= 19) {
                        cardPrice = cardPrice * 0.8;
                    }
                    money = Math.abs(budget - cardPrice);
                    if (budget >= cardPrice) {
                        console.log(`You purchased a 1 month pass for ${sport}.`);
                    } else if (budget < cardPrice) {
                        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`);
                    }
                    break;
                case "f":
                    cardPrice = 37;
                    if (age <= 19) {
                        cardPrice = cardPrice * 0.8;
                    }
                    money = Math.abs(budget - cardPrice);
                    if (budget >= cardPrice) {
                        console.log(`You purchased a 1 month pass for ${sport}.`);
                    } else if (budget < cardPrice) {
                        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`);
                    }
                    break;
            }
            break;
        case "Yoga":
            switch (gender) {
                case "m":
                    cardPrice = 45;
                    if (age <= 19) {
                        cardPrice = cardPrice * 0.8;
                    }
                    money = Math.abs(budget - cardPrice);
                    if (budget >= cardPrice) {
                        console.log(`You purchased a 1 month pass for ${sport}.`);
                    } else if (budget < cardPrice) {
                        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`);
                    }
                    break;
                case "f":
                    cardPrice = 42;
                    if (age <= 19) {
                        cardPrice = cardPrice * 0.8;
                    }
                    money = Math.abs(budget - cardPrice);
                    if (budget >= cardPrice) {
                        console.log(`You purchased a 1 month pass for ${sport}.`);
                    } else if (budget < cardPrice) {
                        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`);
                    }
                    break;
            }
            break;
        case "Zumba":
            switch (gender) {
                case "m":
                    cardPrice = 34;
                    if (age <= 19) {
                        cardPrice = cardPrice * 0.8;
                    }
                    money = Math.abs(budget - cardPrice);
                    if (budget >= cardPrice) {
                        console.log(`You purchased a 1 month pass for ${sport}.`);
                    } else if (budget < cardPrice) {
                        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`);
                    }
                    break;
                case "f":
                    cardPrice = 31;
                    if (age <= 19) {
                        cardPrice = cardPrice * 0.8;
                    }
                    money = Math.abs(budget - cardPrice);
                    if (budget >= cardPrice) {
                        console.log(`You purchased a 1 month pass for ${sport}.`);
                    } else if (budget < cardPrice) {
                        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`);
                    }
                    break;
            }
            break;
        case "Dances":
            switch (gender) {
                case "m":
                    cardPrice = 51;
                    if (age <= 19) {
                        cardPrice = cardPrice * 0.8;
                    }
                    money = Math.abs(budget - cardPrice);
                    if (budget >= cardPrice) {
                        console.log(`You purchased a 1 month pass for ${sport}.`);
                    } else if (budget < cardPrice) {
                        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`);
                    }
                    break;
                case "f":
                    cardPrice = 53;
                    if (age <= 19) {
                        cardPrice = cardPrice * 0.8;
                    }
                    money = Math.abs(budget - cardPrice);
                    if (budget >= cardPrice) {
                        console.log(`You purchased a 1 month pass for ${sport}.`);
                    } else if (budget < cardPrice) {
                        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`);
                    }
                    break;
            }
            break;
        case "Pilates":
            switch (gender) {
                case "m":
                    cardPrice = 39;
                    if (age <= 19) {
                        cardPrice = cardPrice * 0.8;
                    }
                    money = Math.abs(budget - cardPrice);
                    if (budget >= cardPrice) {
                        console.log(`You purchased a 1 month pass for ${sport}.`);
                    } else if (budget < cardPrice) {
                        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`);
                    }
                    break;
                case "f":
                    cardPrice = 37;
                    if (age <= 19) {
                        cardPrice = cardPrice * 0.8;
                    }
                    money = Math.abs(budget - cardPrice);
                    if (budget >= cardPrice) {
                        console.log(`You purchased a 1 month pass for ${sport}.`);
                    } else if (budget < cardPrice) {
                        console.log(`You don't have enough money! You need $${money.toFixed(2)} more.`);
                    }
                    break;
            }
            break;
    }

}

fitnessCard(["50", "m", "23", "Gym"]);