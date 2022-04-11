// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')  
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt(
        [
            //title
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
            //installation how to
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
            //instructions on how to run
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
            //credits
            {
                type: 'input',
                message: "Any credits",
                name: 'installation',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }   else {
                        console.log ('Please enter any credits!');
                        return false;
                    } 
                }
            },
            //usage
            {
                type: 'input',
                message: "How do you use your app",
                name: 'usage',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }   else {
                        console.log ('Please enter your usage!');
                        return false;
                    }
                } 
            },
            //license
            {
                type: 'input',
                message: "license used",
                name: 'license',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }   else {
                        console.log ('Please enter your license used!');
                        return false;
                    }
                } 
            },
            {
                type: 'input',
                message: "GitHub username:",
                name: 'git',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    }   else {
                        console.log ('Please enter your GitHub username!');
                        return false;
                    }
                } 
            },

        ])
        .then(({
            title,
            installation,
            instructions, 
            credit,
            license,
            git,
            usage,
            contribution
        }) =>{
        const template =`# ${title}
        * [Installation](#installation)
        * [Usage](#usage)
        * [Contribution](#contribution)
        * [Credits](#credits)
        * [License](#license)
        ## Installation
        ${installation}
        ## Usage
        ${usage}
        ## Contribution
        ${contribution}
        ## Instructions
        ${instructions}
        ## Credits
        ${credit}
        ## License
        ${license}
        # Contact
        * GitHub${git}
        `

        })
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
