function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];

    let office = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday" || day === "Saturday") {
        if (hour >= 10 && hour <= 18) {
            office = "open";
            console.log(office);
        } else {
            office = "closed";
            console.log(office);
        }
    } else if (day === "Sunday") {
        office = "closed";
        console.log(office);
    } else {
        console.log("unknown day");
    }

}

workingHours(["12", "Monday"]);