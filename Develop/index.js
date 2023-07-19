// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

// TODO: Create an array of questions for user input
// const questions = [];
// README needs to generate with named sections, pull name.data(?) and add to file
// look into different prompt types for selecting license and adding table of contents; include option to skip prompts
inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is what is your project called?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Add a description of your project.',
        },
        {
            type: 'input',
            name: 'contents',
            message: 'Add a table of contents for your README.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Describe your project installation.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How will your project be used?'
        },
        {
            type: 'input',
            name: 'license',
            message: 'Select a license',
        }
    ]).then((responses) => {
        console.log(responses)
    }) 


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
