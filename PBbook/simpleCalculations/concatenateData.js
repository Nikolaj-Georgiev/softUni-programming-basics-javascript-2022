function concatenateData(input) {
    let firsName = String(input[0]);
    let lastName = String(input[1]);
    let age = Number(input[2]);
    let town = String(input[3]);

    console.log(`You are ${firsName} ${lastName}, a ${age}-years old person from ${town}.`);

}
concatenateData(['Ivan', 'Ivanov', 20, 'Sofia']);

function printInfo([firstName, lastName, age, town]) {
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}
printInfo(['Ivan', 'Ivanov', 20, 'Sofia']);