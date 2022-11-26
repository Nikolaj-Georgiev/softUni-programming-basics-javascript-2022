function projectCreation(input){
    let name = input[0];
    let projects = Number(input[1]);
    let hoursPerProject = 3;

    let totalHours = projects * hoursPerProject;

    console.log(`The architect ${name} will need ${totalHours} hours to complete ${projects} project/s.`);
//"The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."


}
projectCreation(["George", "4"]);