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
            name: 'description',
            message: 'Describe your project i.e. what does it do? What is it for?'
        },
        {
            type: 'editor',
            name: 'installation',
            message: 'What are the steps to install your project?',
        },
        {
            type: 'editor',
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
            type: 'editor',
            name: 'contributors',
            message: 'Who contributed on this project?',
        },
        {
            type: 'editor',
            name: 'tests',
            message: 'Give an example on how someone can test this project',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What is your repository name? (Include dashes and ensure correct capitalisation)'
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
            description: data.description,
            installation: data.installation,
            usage: data.usage,
            license: data.license,
            contributors: data.contributors,
            tests: data.tests,
            repo: data.repo,
            github: data.github,
            email: data.email,
        }

        // readMe structure with template literals inplace for the users answers
        const readMe = `# ${answers.title}

![GitHub](https://img.shields.io/github/license/${answers.github}/${answers.repo})

## Description
        
${answers.description}
        
## Table of Contents
        
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
        
## Installation
        
${answers.installation}
        
## Usage
        
${answers.usage}
        
## License
        
${answers.license}
        
## Contributing
        
${answers.contributors}
        
## Tests
        
${answers.tests}
        
## Questions
        
Visit my GitHub profile: [${answers.github}](https://github.com/${answers.github})
        
If you've got any questions, contact me via email: [${answers.email}](${answers.email})`

        // File name for when the file is created
        const filename = 'sampleREADME.md';

        // Creating the file with the readMe data written in the file
        fs.writeFile(filename, readMe, (err) =>
        err ? console.log(err) : console.log('Success!')
        );
    });