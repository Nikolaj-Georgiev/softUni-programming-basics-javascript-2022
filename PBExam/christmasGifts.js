function christmasGifts(input) {

    let index = 0;
    let command = input[index];
    let kids = 0;
    let adults = 0;
    let toysMoney = 0;
    let pulloversMoney = 0;

    while (command !== "Christmas") {
        let relative = Number(input[index]);
        if (relative <= 16) {
            kids++;
            toysMoney += 5;
        } else {
            adults++;
            pulloversMoney += 15;
        }
        command = input[++index];
    }

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${toysMoney}`);
    console.log(`Money for sweaters: ${pulloversMoney}`);

}
christmasGifts(["16",
    "20",
    "46",
    "12",
    "8",
    "20",
    "49",
    "Christmas"
]);