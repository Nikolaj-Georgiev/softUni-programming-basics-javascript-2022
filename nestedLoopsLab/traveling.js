function traveling(input) {
    let index = 0;
    let command = input[index];

    while (command !== "End") {
        let destinationName = command;
        index++;
        let budget = Number(input[index]);
        let savedMoney = 0;
        while (savedMoney < budget) {
            index++;
            savedMoney += Number(input[index]);
        }
        console.log(`Going to ${destinationName}!`);
        index++;
        command = input[index];
    }


}
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"
]);