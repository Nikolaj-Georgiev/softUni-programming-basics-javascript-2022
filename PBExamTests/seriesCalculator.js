function seriesCalculator(input) {
    let seriesName = String(input[0]);
    let seasonsCount = Number(input[1]);
    let seriesCount = Number(input[2]);
    let oneSeriesTimeNoAdd = Number(input[3]);

    let seriesWithaddTime = (oneSeriesTimeNoAdd * 0.2) + oneSeriesTimeNoAdd;
    let sesonFinaleTime = 10 * seasonsCount;

    let totalTime = Math.floor((seriesCount * seriesWithaddTime) * seasonsCount + sesonFinaleTime);

    console.log(`Total time needed to watch the ${seriesName} series is ${totalTime} minutes.`);

}

seriesCalculator(["Lucifer", "3", "18","55"]);

