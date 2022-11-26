function hotelRoom(input) {
    let month = input[0];
    let nightsCount = Number(input[1]);

    let studioPrice = 0;
    let apartmentPrice = 0;

    let apartment = 0;
    let studio = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50;
            apartmentPrice = 65;
            break;
        case "June":
        case "September":
            studioPrice = 75.20;
            apartmentPrice = 68.70;
            break;
        case "July":
        case "August":
            studioPrice = 76;
            apartmentPrice = 77;
            break;
        default:

            break;

    }

    if (nightsCount > 14) {
        apartmentPrice = apartmentPrice * 0.9;
    }

    if (nightsCount > 7 && nightsCount <= 14 && (month === "May" || month === "October")) {
        studioPrice = studioPrice * 0.95;
    } else if (nightsCount > 14 && (month === "May" || month === "October")) {
        studioPrice = studioPrice * 0.70;
    } else if (nightsCount > 14 && (month === "June" || month === "September")) {
        studioPrice = studioPrice * 0.80;
    }

    apartment = apartmentPrice * nightsCount;
    studio = studioPrice * nightsCount;

    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);

}

hotelRoom(["June", "14"]);