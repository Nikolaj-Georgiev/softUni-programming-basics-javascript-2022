function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentsCount = Number(input[2]);
    let nightsCount = Number(input[3]);

    let sport = 0;
    let sleepPrice = 0;

    if (groupType === "girls" || groupType === "boys") {
        switch (season) {
            case "Winter":
                sleepPrice = 9.60;
                break;
            case "Spring":
                sleepPrice = 7.20;
                break;
            case "Summer":
                sleepPrice = 15;
                break;
        }

    } else if (groupType === "mixed") {
        switch (season) {
            case "Winter":
                sleepPrice = 10;
                break;
            case "Spring":
                sleepPrice = 9.50;
                break;
            case "Summer":
                sleepPrice = 20;
                break;
        }
    }

    let campPrice = (studentsCount * sleepPrice) * nightsCount;

    if (10 <= studentsCount && studentsCount < 20) {

        campPrice = campPrice * 0.95;

    } else if (20 <= studentsCount && studentsCount < 50) {

        campPrice = campPrice * 0.85;

    } else if (studentsCount >= 50) {

        campPrice = campPrice * 0.5;

    }

    if (season === "Winter") {
        switch (groupType) {
            case "girls":
                sport = "Gymnastics";
                break;
            case "boys":
                sport = "Judo";
                break;
            case "mixed":
                sport = "Ski";
                break;
        }
    } else if (season === "Spring") {
        switch (groupType) {
            case "girls":
                sport = "Athletics";
                break;
            case "boys":
                sport = "Tennis";
                break;
            case "mixed":
                sport = "Cycling";
                break;
        }
    } else if (season === "Summer") {
        switch (groupType) {
            case "girls":
                sport = "Volleyball";
                break;
            case "boys":
                sport = "Football";
                break;
            case "mixed":
                sport = "Swimming";
                break;
        }
    }

    console.log(`${sport} ${campPrice.toFixed(2)} lv.`);

}

schoolCamp(["Winter", "mixed", "9", "15"]);