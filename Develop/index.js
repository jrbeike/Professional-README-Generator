// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')  
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt(
        [
            {
                type: 'input',
                message: "Whats the project title?",
                name: 'title',
                vlaidate: nameInput => {
                    if (nameInput) {
                        return true;
                    }   else {
                        console.log ('Please enter your project title!');
                        return false;
                    }
                }
            }
        ]
    )
    
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
