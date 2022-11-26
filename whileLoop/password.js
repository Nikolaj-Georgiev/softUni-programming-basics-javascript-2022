function password(input) {
    let username = input[0];
    let password = input[1];

    let index = 2;
    let passTry = input[index];

    while (password !== passTry) {


        index++;
        passTry = input[index];
    }

    if (passTry === password) {
        console.log(`Welcome ${username}!`);
    }


}
password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"
]);