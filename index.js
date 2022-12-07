// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Hi! Thank you for using this README generator, I hope it will be of good use! To start, please enter your name:',
        validate: nameInput => {
            if (nameInput) { 
                return true;
            } else {
                console.log('You will need to enter your name to get started! You can enter a nickname or shorthand form if you want to avoid personal details.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'Please let me know what the title of your project is:',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log ('Your project needs a title! Please give it an appropraite name.');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'gitCredentials',
        message: 'Please enter your GitHub username:',
        validate: gitCredentialsInput => {
            if (gitCredentialsInput) {
                return true
            } else {
                console.log('You must enter your Github username. This will allow users to easily connect with you on the Github platform.')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address:',
        validate: emailInput => {
            if (emailInput) {
                return true
            } else {
                console.log('Please enter your email address. This is to ensure users have a way to communicate with you.')
                return false;
            }
        }
    },
    {
        type:
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
