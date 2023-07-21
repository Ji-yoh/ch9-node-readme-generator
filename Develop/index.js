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

// originally had this array included in prompts but moved outside for clarity and to use in generateMarkdown.js
// add list from Github
const license = [
    'Apache 2.0', 
    'GNU GPL v3',
    'BSD 2',
    'BSD 3', 
    'Boost', 
    'Creative Commons Zero v1', 
    'Eclipse Public 2.0', 
    'GNU Alfero v3.0', 
    'GNU General 2.0', 
    'GNU Lesser General 2.1', 
    'Mozilla Public 2.0 License', 
    'MIT', 
    'The Unlicense', 
    'None'
]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('README.md created successfully!')
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
            choices:  license 
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
        writeToFile('./output/README.md', generateMarkdown(responses));
    }) 
}

// Function call to initialize app
init();
