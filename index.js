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
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }   else {
                        console.log ('Please enter your project title!');
                        return false;
                    }
                    
                },
            },
            {
                type: 'input',
                message: "How do you install your application",
                name: 'installation',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }   else {
                        console.log ('Please enter your installation process!');
                        return false;
                    } 
                }
            },
            {
                type: 'input',
                message: "any special instructions",
                name: 'instructions',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }   else {
                        console.log ('Please enter any special instructions!');
                        return false;
                    } 
                }
            },
            {
                type: 'input',
                message: "How do you install your application",
                name: 'installation',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }   else {
                        console.log ('Please enter your installation process!');
                        return false;
                    } 
                }
            },
            {
                type: 'input',
                message: "How do you install your application",
                name: 'installation',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }   else {
                        console.log ('Please enter your installation process!');
                        return false;
                    }
                } 
            },
            {
                type: 'input',
                message: "How do you install your application",
                name: 'installation',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }   else {
                        console.log ('Please enter your installation process!');
                        return false;
                    }
                } 
            }
        ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
