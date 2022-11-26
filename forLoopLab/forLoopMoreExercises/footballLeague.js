function footballLeague(input) {
    let stadiumCapacity = Number(input[0]);
    let fansCount = Number(input[1]);

    let sectorAFans = 0;
    let sectorBFans = 0;
    let sectorVFans = 0;
    let sectorGFans = 0;

    for (i = 2; i < input.length; i++) {
        let fan = input[i];
        switch (fan) {
            case "A":
                sectorAFans++;
                break;
            case "B":
                sectorBFans++;
                break;
            case "V":
                sectorVFans++;
                break;
            case "G":
                sectorGFans++;
                break;
            default:
                break;

        }
    }

    let sectorAFansPercent = (sectorAFans / fansCount) * 100;
    let sectorBFansPercent = (sectorBFans / fansCount) * 100;
    let sectorVFansPercent = (sectorVFans / fansCount) * 100;
    let sectorGFansPercent = (sectorGFans / fansCount) * 100;
    let averageFansPercent = (fansCount / stadiumCapacity) * 100;

    console.log(`${sectorAFansPercent.toFixed(2)}%`);
    console.log(`${sectorBFansPercent.toFixed(2)}%`);
    console.log(`${sectorVFansPercent.toFixed(2)}%`);
    console.log(`${sectorGFansPercent.toFixed(2)}%`);
    console.log(`${averageFansPercent.toFixed(2)}%`);

}

footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);