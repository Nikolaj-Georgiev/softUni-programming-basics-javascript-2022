function trekkingMania(input) {
    let groupsCount = Number(input[0]);

    let musalaClimbers = 0;
    let monblanClimbers = 0;
    let kilimandjaroClimbers = 0;
    let k2Climbers = 0;
    let everestClimbers = 0;
    let totalClimbers = 0;

    for (let i = 1; i <= groupsCount; i++) {
        let climbers = Number(input[i]);
        totalClimbers += climbers;
        if (climbers <= 5) {
            musalaClimbers += climbers;
        } else if (climbers >= 6 && climbers <= 12) {
            monblanClimbers += climbers;
        } else if (climbers >= 13 && climbers <= 25) {
            kilimandjaroClimbers += climbers;
        } else if (climbers >= 26 && climbers <= 40) {
            k2Climbers += climbers;
        } else if (climbers >= 41) {
            everestClimbers += climbers;
        }
    }

    console.log(((musalaClimbers / totalClimbers) * 100).toFixed(2) + '%');
    console.log(((monblanClimbers / totalClimbers) * 100).toFixed(2) + '%');
    console.log(((kilimandjaroClimbers / totalClimbers) * 100).toFixed(2) + '%');
    console.log(((k2Climbers / totalClimbers) * 100).toFixed(2) + '%');
    console.log(((everestClimbers / totalClimbers) * 100).toFixed(2) + '%');

}
trekkingMania(["10",
    "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"
]);