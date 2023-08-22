// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { deserialize } = require('v8');

const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache']

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter instructions for installation:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter how to use the project:'
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Enter the contribution guidelines:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Enter license:',
        choices: licenses
    },
    {
        type: 'input',
        message: 'Enter your GitHub user:',
        name: 'username'
    },
    {
        type: 'input',
        message: 'Enter your email address:',
        name: 'email'
    },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    const fileName = './dist/README.md';

    fs.writeFile(filename, data, function (err) {
        err ? console.log(err) 
        : console.log(filename + " created")
    });
}

// TODO: Create a function to initialize app

function init() {
    inquirer.createPromptModule(questions).then (answers => writeToFile(generateMarkdown(answers)))
}

// Function call to initialize app
init();
