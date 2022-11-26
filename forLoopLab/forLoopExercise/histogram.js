function histogram(input) {

    let numbers = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;


    for (let i = 1; i <= numbers; i++) {
        let num = Number(input[i]);

        if (num < 200) {
            p1++;
        } else if (num <= 399) {
            p2++;
        } else if (num <= 599) {
            p3++;
        } else if (num <= 799) {
            p4++;
        } else if (num >= 800) {
            p5++;
        }

    }

    console.log(`${((p1 / numbers) * 100).toFixed(2)}%`);
    console.log(`${((p2 / numbers) * 100).toFixed(2)}%`);
    console.log(`${((p3 / numbers) * 100).toFixed(2)}%`);
    console.log(`${((p4 / numbers) * 100).toFixed(2)}%`);
    console.log(`${((p5 / numbers) * 100).toFixed(2)}%`);
}

histogram(["3", "1", "2", "999"]);