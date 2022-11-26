function graduation(input) {
    let student = input[0];
    let index = 1;
    let currentGrade = Number(input[index]);
    let averageGrade = 0;
    let gradeSum = 0;
    let gradesOver4 = 0;

    while (index < input.length) {
        if (currentGrade > 0 || currentGrade <= 6) {
            if (currentGrade < 4) {
                if (Number(input[index - 1]) < 4) {
                    console.log(`${student} has been excluded at ${index - 1} grade`);
                    break;
                }
            }
            gradeSum += currentGrade;
            if (currentGrade >= 4) {
                gradesOver4++;
            }
            index++;
            currentGrade = Number(input[index]);
        }

    }

    averageGrade = gradeSum / gradesOver4;
    if (gradesOver4 >= 12) {
        console.log(`${student} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}
graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"
]);