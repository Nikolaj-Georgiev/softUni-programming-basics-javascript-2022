function easterBake(input) {

    let kozunakCount = Number(input[0]);

    let highestFlour = 0;
    let highestSugar = 0;
    let totalFlour = 0;
    let totalSugar = 0;

    let sugarPacks = 0;
    let flourPacks = 0;

    for (let i = 1; i < input.length; i++) {
        let sugar = Number(input[i]);
        let flour = Number(input[++i]);
        totalSugar += sugar;
        totalFlour += flour;

        if (highestFlour < flour) {
            highestFlour = flour;
        }
        if (highestSugar < sugar) {
            highestSugar = sugar;
        }

    }

    sugarPacks = Math.ceil(totalSugar / 950);
    flourPacks = Math.ceil(totalFlour / 750);

    console.log(`Sugar: ${sugarPacks}`);
    console.log(`Flour: ${flourPacks}`);
    console.log(`Max used flour is ${highestFlour} grams, max used sugar is ${highestSugar} grams.`);


}
easterBake(["4",
    "500",
    "350",
    "560",
    "430",
    "600",
    "345",
    "578",
    "543"
]);