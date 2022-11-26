function trekkingMania(input) {
    let groupsCount = Number(input[0]);

    let peopleInGroup = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;
    let peopleCount = 0;

    for (i = 1; i < input.length; i++) {
        peopleInGroup = Number(input[i]);
        peopleCount += peopleInGroup;

        if (peopleInGroup <= 5) {
            musala += peopleInGroup;
        } else if (peopleInGroup <= 12) {
            monblan += peopleInGroup;
        } else if (peopleInGroup <= 25) {
            kilimandjaro += peopleInGroup;
        } else if (peopleInGroup <= 40) {
            k2 += peopleInGroup;
        } else if (peopleInGroup >= 41) {
            everest += peopleInGroup;
        }

    }

    console.log(((musala / peopleCount) * 100).toFixed(2) + "%");
    console.log(((monblan / peopleCount) * 100).toFixed(2) + "%");
    console.log(((kilimandjaro / peopleCount) * 100).toFixed(2) + "%");
    console.log(((k2 / peopleCount) * 100).toFixed(2) + "%");
    console.log(((everest / peopleCount) * 100).toFixed(2) + "%");

}

trekkingMania(["5",
    "25", "41", "31", "250", "6"
]);