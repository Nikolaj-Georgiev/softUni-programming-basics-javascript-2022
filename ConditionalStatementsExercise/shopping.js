function shopping(input){
    
    let budget = Number(input[0]);
    let videocardsN = Number(input[1]);
    let processorM = Number(input[2]);
    let ramP = Number(input[3]);

    let videocardPrice = 250;
    let videocardSum = videocardsN * videocardPrice;
    let processorPrice = videocardSum * 0.35;
    let ramPrice = videocardSum * 0.1;

    let discount = 0;
    if(videocardsN > processorM){
        discount = 0.15;
    }

    let endSum = (videocardsN * videocardPrice) + (processorM * processorPrice) + (ramP * ramPrice);
    let discountSum = endSum * discount;
    let endSumDiscounted = endSum - discountSum;

    let money = 0;

    if(budget >= endSumDiscounted){
        money = (budget - endSumDiscounted).toFixed(2);
        console.log(`You have ${money} leva left!`);
    }else{
        money = (endSumDiscounted - budget).toFixed(2);
        console.log(`Not enough money! You need ${money} leva more!`);
    }

}
shopping(["900", "2", "1", "3"]);