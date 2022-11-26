function trainTheTrainers(input) {

    let teachers = Number(input[0]);

    let index = 1;
    let command = input[index];
    let averageGrade = 0;
    let counter = 0;

    while (command !== "Finish") {

        counter++;
        let localGrade = 0;

        for (let i = 1; i <= teachers; i++) {
            index++;
            let grade = Number(input[index]);
            localGrade += grade;
        }
        console.log(`${command} - ${(localGrade / teachers).toFixed(2)}.`);
        averageGrade += localGrade / teachers;
        index++;
        command = input[index];

    }

    console.log(`Student's final assessment is ${(averageGrade / counter).toFixed(2)}.`);

}
trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"
]);