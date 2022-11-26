function sequence2kPlus1(input) {
    let number = Number(input[0]);

    let n = 1;

    while (n <= number) {
        let local = (n * 2) + 1;
        console.log(n);
        n = local;
    }

}
sequence2kPlus1(["8"]);