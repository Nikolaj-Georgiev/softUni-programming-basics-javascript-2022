function vacationBooks(input){
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let pagesTime = pages / pagesPerHour;
    let hoursPerDay = pagesTime / days;

    console.log(hoursPerDay);

}
vacationBooks(["432", "15", "4"]);