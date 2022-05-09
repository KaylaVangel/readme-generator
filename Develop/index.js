// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title of the project? (Required)',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Decribe your project',
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please list installation instructions (Required)',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please include usage information (Required)',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please include contribution guidelines (Required)',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please include test instructions',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose the applicable licenses (check all that apply',
            choices: ['MIT', 'Microsoft Public License', 'ISC']
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please enter link for GitHub profile',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your Email Address',
        }
        
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
    });
}



// TODO: Create a function to initialize app
function init() {
    promptUser().then(answers => writeToFile('README.md', generateMarkdown(answers)));
}

// Function call to initialize app
init();
