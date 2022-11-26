function walking(input) {
    let goal = 10000;
    let index = 0;
    let steps = input[index];
    let walking = 0;

    while (index < input.length) {

        if (steps === "Going home") {
            index++;
            steps = Number(input[index]);
            walking += steps;
            if (walking >= goal) {
                console.log("Goal reached! Good job!");
                console.log(`${(walking - goal)} steps over the goal!`);
                break;
            } else if (walking < goal) {
                console.log(`${goal - walking} more steps to reach goal.`);
                break;
            }
            break;
        }
        steps = Number(input[index]);
        walking += steps;

        if (walking >= goal) {
            console.log("Goal reached! Good job!");
            console.log(`${(walking - goal)} steps over the goal!`);
            break;
        }

        index++;
        steps = input[index];

    }

    if (index >= input.length && goal > walking) {
        console.log(`${goal - walking} more steps to reach goal.`);


    }
}
walking(["1000",
    "1500",
    "2000",
    "6500"
]);