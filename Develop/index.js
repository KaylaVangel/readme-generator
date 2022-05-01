// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of the project? (Required)',
    },
    {
        type: 'input',
        name: 'description (Required)',
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
        type: 'checkbox',
        name: 'license',
        message: 'Please choose the applicable licenses (check all that apply',
        choices: ['MIT', 'Academic Free License v3.0', 'Apache license 2.0']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
