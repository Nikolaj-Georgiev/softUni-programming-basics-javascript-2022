function examPreparation(input) {
    let badGrades = Number(input[0]);

    let index = 1;
    let holder = input[index];
    let name = 0;
    let grade = 0;
    let gradesSum = 0;
    let counter = 0;
    let averageGrade = 0;

    while (holder !== "Enough") {
        if (index < input.length) {
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
examPreparation(["5",
    "Money",
    "4",
    "Story",
    "3",
    "Spring Time",
    "5",
    "Bus",
    "4",
    "Bus",
    "6",
    "Bus",
    "5",
    "Bus",
    "6",
    "Spring Time",
    "4",
    "Spring",
    "3",
    "Spring Time",
    "5"
]);