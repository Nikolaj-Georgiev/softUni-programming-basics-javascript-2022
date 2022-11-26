function transportPrice(input) {
    let kmCount = Number(input[0]);
    let dayOrNight = input[1];

    let chiepestTransport = 0;

    if (kmCount >= 100) {
        chiepestTransport = kmCount * 0.06;
    } else if (kmCount < 20) {
        if (dayOrNight === "day") {
            chiepestTransport = kmCount * 0.79 + 0.70;
        } else if (dayOrNight === "night") {
            chiepestTransport = kmCount * 0.9 + 0.70;
        }
    } else {
        chiepestTransport = kmCount * 0.09;
    }

    console.log(chiepestTransport.toFixed(2));

}

transportPrice([180, "night"]);