function depositCalculator(input){
    let depositSum = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let annualInterestRate = Number(input[2] / 100);

    //сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)

    let interestSum = depositSum * annualInterestRate;
    let montlyInterest = interestSum / 12;

    let totalSum = depositSum + (depositPeriod * montlyInterest);

    console.log(totalSum);

}
depositCalculator(["2350", "6", "7"]);