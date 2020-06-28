const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
function askForEmployee(){
    return  new Promise( function( pResolve, pReject ){
        inquirer.prompt(
            [
                {
                    type: "list",
                    name: "employeeType",
                    message: "How big is the dude flipflop?",
                    when: true,
                    // Comment or delete the choices array below if the type above is not:
                    // checkbox, list, rawlist or expand
                    choices: [
                        "Intern",
                        "Engineer"
                    ]
                },
                {
                    type: "input",
                    name: "employeeName",
                    message: "Who's the dude?",
                    when: true
                    
                },
                {
                    type: "input",
                    name: "employeeId",
                    message: "What's the id of the minion?",
                    when: true
                    
                },
                {
                    type: "input",
                    name: "employeeEmail",
                    message: "What's the email of the minion?",
                    when: true
                    
                },
                {
                    type: "input",
                    name: "employeeGithub",
                    message: "What's the Github of the minion?",
                    when: function(pCurrentAnswers){
                        return pCurrentAnswers.employeeType === "Engineer";
                    }
                    
                },
                {
                    type: "input",
                    name: "employeeSchool",
                    message: "What's the Minion Academy of the Minion?",
                    when: function(pCurrentAnswers){
                        return pCurrentAnswers.employeeType === "Intern";
                    }
                    
                }
            ]
        )
            .then(function(pValues){
                switch(pValues.employeeType){
                    case "Engineer":
                        pResolve(new Engineer(pValues.employeeName,pValues.employeeId,pValues.employeeEmail,pValues.employeeGithub));    
                        break;
                    case "Intern":
                        pResolve(new Intern(pValues.employeeName,pValues.employeeId,pValues.employeeEmail,pValues.employeeSchool));
                        break
                }
            });
    } );
}
// console.log( render([new Manager("SRBAFUN")] ) );
let team = [];
inquirer.prompt(
    [
        {
            type: "input",
            name: "managerName",
            message: "Who's your leader?",
            when: true
            
        },
        {
            type: "input",
            name: "managerId",
            message: "What's the id of the manager?",
            when: true
            
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What's the email of the manager?",
            when: true
            
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What's the office number of the manager?",
            when: true
            
        }
    ]
)
    .then(function(pValues){
        team.push(new Manager(pValues.managerName,pValues.managerId,pValues.managerEmail,pValues.managerOfficeNumber));
        inquirer.prompt(
            [
                {
                    type: "number",
                    name: "employeesNumber",
                    message: "How many minions does the team has?",
                    when: true
                }
            ]
        )
            .then(async function(pValues){
                for (var i=0; i < pValues.employeesNumber; i++){
                    team.push(await askForEmployee());
                }
                // console.table(team); 
                let lHtml = render(team);
                fs.promises.writeFile( outputPath, lHtml, 'utf8' )
                    .then( function( pValue ){
                        console.log( 'File written successfully' );
                    } )
                    .catch( function( pError ){
                        throw pError;
                    } );
            });
    });

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
