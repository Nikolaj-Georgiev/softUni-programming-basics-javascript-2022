function godzillaVsCong(input){
    let movieBudget = Number(input[0]);
    let extras = Number(input[1]);
    let extrasApparel = Number(input[2]);

    let scenery = movieBudget * 0.1;
    let extrasApparelSum = extras * extrasApparel;
    let discount = 0;

    if(extras > 150){
        discount = extrasApparelSum * 0.1;
    }

    let finalMovieSum = scenery + (extrasApparelSum - discount);
    let money = 0;

    if(finalMovieSum > movieBudget){
        money = (finalMovieSum - movieBudget).toFixed(2);
        console.log("Not enough money!");
        console.log(`Wingard needs ${money} leva more.`);
    }else if(finalMovieSum <= movieBudget){
        money = (movieBudget - finalMovieSum).toFixed(2);
        console.log("Action!");
        console.log(`Wingard starts filming with ${money} leva left.`);
    }

}
godzillaVsCong(["20000", "120", "55.5"]);