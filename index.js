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
                return true;
            } else {
                console.log('You must enter your Github username. This will allow users to easily connect with you on the Github platform.');
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
                return true;
            } else {
                console.log('Please enter your email address. This is to ensure users have a way to communicate with you.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of what your project does. Explain what problem is being addressed, and how your application solves it:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log ('You must provide a description of your application.');
                return false;
            }
        }
    },
    {
        type: 'input', 
        name: 'requirements',
        message: 'Please provide any requirements your application needs to function. You can mention any languages, APIs, dependencies, or whatever else you feel is relavent:',
        validate: requirementsInput => {
            if (requirementsInput) {
                return true;
            } else {
                console.log ('You must list any requirements your application has.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How will users install or run the application?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log ("You must explain how to run or install your application to your users.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'useage',
        message: 'How will users use your app? Please provide instructions on how to operate or navigate your application:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log ("You must explain how to use your application.");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you use for your application?',
        choices: ['mit', 'apache-2.0','agpl-3.0','gpl-3.0', 'lgpl-3.0', 'mpl-2.0', 'bsl-1.0','unlicense'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log ('You must select a license for your application! If you do not have a license, you can select unlicense!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'examples',
        message: 'Please provide examples of your application in practice. You may do this manually, but provide a short description of what you are showcasing.',
        validate: examplesInput => {
            if (examplesInput) {
                return true;
            } else {
                console.log('Even if you plan to add examples later, or need external tech to showcase your app at work, please provide a short description of what tests you will showcase. You can always edit this later!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file //confused about how relavent fileName is, could probably edit this function to be an arrow function to remedy this
function writeToFile(fileName, data) {
    fs.writeFile(`./output/README.md`, data, err => {
        if (err) {
            throw err
        };
        console.log('Please navigate to the output folder to see your created README.md file!')
    })
};

// TODO: Create a function to initialize app // Rewrote as arrow function
const init = () => {
    return inquirer.prompt(questions);
}


// Function call to initialize app
init ()
.then(results => generateMarkdown(results))
.then (generateREADME => writeToFile('README.md', generateREADME))
.catch(err => {
    console.log(err);
});