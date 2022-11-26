function building(input) {
    floors = Number(input[0]);
    rooms = Number(input[1]);


    for (let i = floors; i >= 1; i--) {
        let result = '';
        let typeOfRoom = '';
        if (i === floors) {
            typeOfRoom = 'L';
        } else if (i % 2 === 0) {
            typeOfRoom = 'O';
        } else {
            typeOfRoom = 'A';
        }

        for (let j = 0; j < rooms; j++) {

            result += typeOfRoom + i + j + ' ';
        }
        console.log(result);

    }

}
building(["6", "4"]);