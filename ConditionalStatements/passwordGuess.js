function passwordGuess(input){
    let password = String(input[0]);
    let correctPassword = String('s3cr3t!P@ssw0rd');
    
    if(password === correctPassword){
        console.log("Welcome");
    }else{
        console.log("Wrong password!");
    }

}
passwordGuess(["s3cr3t!P@ssw0rd"]);