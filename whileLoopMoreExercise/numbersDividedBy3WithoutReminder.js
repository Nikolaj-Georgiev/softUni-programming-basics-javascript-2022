function numbersDividedBy3WithoutReminder() {

    let index = 1;

    while (index !== 100) {
        if (index % 3 === 0) {
            console.log(index);
        }
        index++;
    }

}
numbersDividedBy3WithoutReminder();