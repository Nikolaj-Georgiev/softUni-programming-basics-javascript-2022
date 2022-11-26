function vacation(input) {

    let vacationCost = Number(input[0]);
    let cash = Number(input[1]);
    let index = 2;
    let holder = input[index];
    let days = 0;
    let spendingDays = 0;

    while (index < input.length) {
        let action = holder;
        index++;
        let money = Number(input[index]);


        switch (action) {
            case "spend":
                if ((cash - money) > 0) {
                    cash -= money;
                    spendingDays++;
                    days++;

                } else if ((cash - money) <= 0) {
                    cash = 0;
                    spendingDays++;
                    days++;

                }
                if (spendingDays === 5) {
                    console.log("You can't save the money.");
                    console.log(`${days}`);
                    break;
                }
                break;
            case "save":
                if ((vacationCost - cash) > 0) {
                    cash += money;
                    spendingDays = 0;
                    days++;

                }
                if ((vacationCost - cash) <= 0) {

                    break;
                }
                break;
        }
        index++
        holder = input[index];
        if ((vacationCost - cash) <= 0) {
            console.log(`You saved the money for ${days} days.`);
            break;
        }


    }

}
vacation(["110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"
])