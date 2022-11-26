function grades(input) {
    let studentsCount = Number(input[0]);

    let topStudents = 0;
    let goodStudents = 0;
    let averageStudents = 0;
    let failStudents = 0;

    let grade = 0;
    let totalGradesSum = 0;

    for (i = 1; i <= studentsCount; i++) {
        totalGradesSum += Number(input[i]);
        grade = Number(input[i]);

        if (grade < 3.00) {
            failStudents++;
        } else if (grade <= 3.99) {
            averageStudents++;
        } else if (grade <= 4.99) {
            goodStudents++;
        } else if (grade >= 5.00) {
            topStudents++;
        }
    }

    let averageGrade = totalGradesSum / studentsCount;
    let topStudentsPercent = (topStudents / studentsCount) * 100;
    let goodStudentsPercent = (goodStudents / studentsCount) * 100;
    let averageStudentsPercent = (averageStudents / studentsCount) * 100;
    let failStudentsPercent = (failStudents / studentsCount) * 100;

    console.log(`Top students: ${topStudentsPercent.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${goodStudentsPercent.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${averageStudentsPercent.toFixed(2)}%`);
    console.log(`Fail: ${failStudentsPercent.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);

}

grades(["10",
    "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"
]);