function oldBooks(input) {
    let searchedBook = input[0];
    let index = 1;
    let book = input[index];
    let counter = 0;
    while (index < input.length) {
        if (book === "No More Books") {
            break;
        }

        if (book === searchedBook) {
            console.log(`You checked ${counter} books and found it.`);
            break;
        }
        counter++;

        index++;
        book = input[index];

    }

    if (book !== searchedBook) {
        console.log("The book you search is not here!");
        console.log(`You checked ${counter} books.`);
    }
}
oldBooks(["Bourne",
    "True Story",
    "Forever",
    "More Space",
    "The Girl",
    "Spaceship",
    "Strongest",
    "Profit",
    "Tripple",
    "Stella",
    "The Matrix",
    "Bourne"
]);