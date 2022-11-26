function cinema(input) {
    let seats = Number(input[0]);

    let people = 0;
    let income = 0;

    for (let i = 1; i < input.length; i++) {
        let incomingPeople = 0;
        incomingPeople = input[i];
        if (incomingPeople === "Movie time!") {
            console.log(`There are ${(seats - people)} seats left in the cinema.`)
            break;
        }
        let result = seats - people;
        if (result > 0 && result >= Number(incomingPeople)) {
            people += Number(incomingPeople);
            if (incomingPeople % 3 === 0) {
                income += Number(incomingPeople) * 5 - 5;
            } else {
                income += Number(incomingPeople) * 5;
            }
        } else {
            console.log("The cinema is full.");
            break;
        }
    }

    console.log(`Cinema income - ${income} lv.`);

}

cinema(["100",
    "15",
    "15",
    "15",
    "15",
    "15",
    "15",
    "15"
]);