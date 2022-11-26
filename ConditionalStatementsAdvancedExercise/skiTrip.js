function skiTrip(input) {
    let skiDays = Number(input[0]);
    let roomType = input[1];
    let evaluation = input[2];

    skiDays -= 1;

    let roomPrice = 18;
    let appPrice = 25;
    let presidentAppPrice = 35;

    let totalSum = 0;

    if (roomType === "room for one person") {
        if (evaluation === "positive") {
            totalSum = (skiDays * roomPrice) * 1.25;

        } else if (evaluation === "negative") {
            totalSum = (skiDays * roomPrice) * 0.9;
        }

        console.log(totalSum.toFixed(2));

    } else if (roomType === "apartment") {
        if (skiDays < 10) {
            if (evaluation === "positive") {
                totalSum = ((skiDays * appPrice) * 0.7) * 1.25;

            } else if (evaluation === "negative") {
                totalSum = ((skiDays * appPrice) * 0.7) * 0.9;
            }
        } else if (skiDays >= 10 && skiDays <= 15) {
            if (evaluation === "positive") {
                totalSum = ((skiDays * appPrice) * 0.65) * 1.25;

            } else if (evaluation === "negative") {
                totalSum = ((skiDays * appPrice) * 0.65) * 0.9;
            }
        } else {
            if (evaluation === "positive") {
                totalSum = ((skiDays * appPrice) * 0.50) * 1.25;

            } else if (evaluation === "negative") {
                totalSum = ((skiDays * appPrice) * 0.50) * 0.9;
            }
        }

        console.log(totalSum.toFixed(2));

    } else if (roomType === "president apartment") {
        if (skiDays < 10) {
            if (evaluation === "positive") {
                totalSum = ((skiDays * presidentAppPrice) * 0.9) * 1.25;

            } else if (evaluation === "negative") {
                totalSum = ((skiDays * presidentAppPrice) * 0.9) * 0.9;
            }
        } else if (skiDays >= 10 && skiDays <= 15) {
            if (evaluation === "positive") {
                totalSum = ((skiDays * presidentAppPrice) * 0.85) * 1.25;

            } else if (evaluation === "negative") {
                totalSum = ((skiDays * presidentAppPrice) * 0.85) * 0.9;
            }
        } else {
            if (evaluation === "positive") {
                totalSum = ((skiDays * presidentAppPrice) * 0.80) * 1.25;

            } else if (evaluation === "negative") {
                totalSum = ((skiDays * presidentAppPrice) * 0.80) * 0.9;
            }
        }

        console.log(totalSum.toFixed(2));

    }


}

skiTrip(["30", "president apartment", "negative"]);