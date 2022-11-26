function barcodeGeneratorTwo(input) {

    let startNumber = input[0];
    let endNumber = input[1];

    let stringOfAllOddNumbers = '';

    let firstDigit = 0;
    let secondDigit = 0;
    let thirdDigit = 0;
    let forthDigit = 0;

    for (let i = Number(startNumber[0]); i <= Number(endNumber[0]); i++) {
        if (i % 2 !== 0) {
            firstDigit = i;
            for (let j = Number(startNumber[1]); j <= Number(endNumber[1]); j++) {
                if (j % 2 !== 0) {
                    secondDigit = j;
                    for (let k = Number(startNumber[2]); k <= Number(endNumber[2]); k++) {
                        if (k % 2 !== 0) {
                            thirdDigit = k;
                            for (let l = Number(startNumber[3]); l <= Number(endNumber[3]); l++) {
                                if (l % 2 !== 0) {
                                    forthDigit = l;
                                    stringOfAllOddNumbers += `${firstDigit}${secondDigit}${thirdDigit}${forthDigit} `;
                                    continue;
                                }
                            }
                        }

                    }

                }
            }
        }

    }

    console.log(stringOfAllOddNumbers);


}
barcodeGeneratorTwo(["1365", "5877"]);