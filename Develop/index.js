// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown.js")

// TODO: Create an array of questions for user input

const questions = [
    'What is what is your project called?',
    'Add a description of your project.',
    'Add installation instructions for your project.',
    'Add usage information for your project.',
    'Which license would you like to use?',
    'Add contribution guidelines for your project.',
    'Add test instructions for your project.',
    'What is your email address?',
    'What is your GitHub username?'
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {

    })
}

// TODO: Create a function to initialize app
// README needs to generate with named sections, pull name.data(?) and add to file
// look into different prompt types for selecting license and adding table of contents; include option to skip prompts
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
        },
        {
            type: 'list',
            name: 'license',
            message: questions[4],
            choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'test',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'email',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'github',
            message: questions[8]
        }
    ]).then((responses) => {
        console.log(responses)
        writeToFile('README.md', generateMarkdown(responses));
    }) 
}

// Function call to initialize app
init();
