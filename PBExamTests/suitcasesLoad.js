function suitcasesLoad(input) {

    let trunkVolume = Number(input[0]);
    let loadedSuitcases = 0;
    let index = 1;
    let command = input[index];

    while (command !== "End") {
        suitcaseVolume = Number(command);
        if (index % 3 === 0) {
            suitcaseVolume = suitcaseVolume + (suitcaseVolume * 0.10);
        }
        trunkVolume -= suitcaseVolume;
        if (trunkVolume >= 0) {
            loadedSuitcases++;
        } else {
            break;
        }
        command = input[++index];
    }

    if (trunkVolume >= 0) {
        console.log(`Congratulations! All suitcases are loaded!`);
    } else {
        console.log(`No more space!`);
    }
    console.log(`Statistic: ${loadedSuitcases} suitcases loaded.`);

}
suitcasesLoad(["600",
    "500",
    "70",
    "30",
    "End"
]);