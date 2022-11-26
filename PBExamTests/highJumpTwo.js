function highJumpTwo(input) {

    let targetHeight = Number(input[0]);
    let index = 1;
    let jump = Number(input[index]);

    let isWin = jump > targetHeight;
    let jumpsCount = 0;
    let currentHeight = targetHeight - 30;
    let unsuccessfulJumps = 0;

    while (!isWin) {
        if (index >= input.length) {
            break;
        }
        jumpsCount++;
        unsuccessfulJumps = 0;
        let flag = false;

        while (jump <= currentHeight) {

            unsuccessfulJumps++;

            if (unsuccessfulJumps >= 3) {
                flag = true;
                break;
            }

            jumpsCount++;
            jump = Number(input[++index]);
        }
        if (flag) {
            break;
        }
        if (jump > currentHeight) {

            if (currentHeight >= targetHeight) {
                break;
            }
            currentHeight += 5;
        }

        jump = Number(input[++index]);

    }

    if (unsuccessfulJumps >= 3) {
        console.log(`Tihomir failed at ${currentHeight}cm after ${jumpsCount} jumps.`);
    } else if (jump > targetHeight) {
        console.log(`Tihomir succeeded, he jumped over ${currentHeight}cm after ${jumpsCount} jumps.`);
    }

}
highJumpTwo(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"
]);