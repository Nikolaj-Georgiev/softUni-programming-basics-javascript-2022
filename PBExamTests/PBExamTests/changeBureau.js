function changeBureau(input){
    let bitcoinCount = Number(input[0]);
    let chineseYuanCount = Number(input[1]);
    let changeCommission = Number(input[2]) / 100;

    let bitcoin = 1168;
    let dolar = 1.76;
    let chineseYuan = dolar * 0.15;
    let euro = 1.95;

    let leva = bitcoinCount * bitcoin + chineseYuanCount * chineseYuan;
    let euroSum = leva / euro;
    let commission = euroSum * changeCommission;

    let finalSum = euroSum - commission;

    console.log(finalSum.toFixed(2));

}
changeBureau(["1", "5", "5"]);