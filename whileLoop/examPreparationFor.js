function examPreparationFor(input) {
    let badGrades = Number(input[0]);

    let index = 1;
    let holder = input[index];
    let name = 0;
    let grade = 0;
    let gradesSum = 0;
    let counter = 0;
    let averageGrade = 0;

    for (let i = 1; i < input.length; i++) {
        if (holder !== "Enough") {
            name = holder;
            index++;
            grade = Number(input[index]);
            gradesSum += grade;

            if (grade <= 4) {
                badGrades--;
            }

            if (badGrades == 0) {
                console.log(`You need a break, ${Number(input[0])} poor grades.`);
                break;
            }

            counter++;
            index++;
            holder = input[index];

        } else {
            break;
        }
    }

    averageGrade = gradesSum / counter;

    if (badGrades != 0) {
        console.log(`Average score: ${averageGrade.toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${name}`);

    }


}
examPreparationFor(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"
]);