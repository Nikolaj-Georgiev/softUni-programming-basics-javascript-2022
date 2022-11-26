function rectangle10X10Stars() {
    let star = '*';


    for (let i = 1; i <= 10; i++) {
        let line = '';
        for (let j = 1; j <= 10; j++) {
            line += star;
        }
        console.log(line);

    }

}
rectangle10X10Stars();