const inquirer = require('inquirer');
const fs = require('fs');

// Questions for the user to answer in the command line
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How is it used?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you want to assign your project?',
            choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3'],
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed on this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Give an example on how someone can test this project',
        },
        {
            type: 'input',
            name: 'github',
            message: "What's your GitHub username?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What's your email address?"
        },
    ])
    
    // Storing answers in an object
    .then((data) => {
        const answers = {
            title: data.title,
            installation: data.installation,
            usage: data.usage,
            license: data.license,
            contributors: data.contributors,
            tests: data.tests,
            github: data.github,
            email: data.email,
        }
        // Testing answers in console log)
        console.log(answers.title);
        console.log(answers.installation);
        console.log(answers.usage);
        console.log(answers.license);
        console.log(answers.contributors);
        console.log(answers.tests);
        console.log(answers.github);
        console.log(answers.email);
    })