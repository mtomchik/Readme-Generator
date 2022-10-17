// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
inquirer.prompt ([
   {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
   },
   {
    type: 'input',
    message: 'Describe your application.',
    name: 'description',
   },
   {
    type: 'input',
    message: 'How do you install your application?',
    name: 'installation',
   },
   {
    type: 'input',
    message: 'How is this application used?',
    name: 'use',
   },
   {
    type: 'input',
    message: 'How can someone contribute to this application?',
    name: 'contributing',
   },
   {
    type: 'input',
    message: 'What are the testing instructions?',
    name: 'tests',
   },
   {
    type: 'list',
    message: 'What licence would you like to use?',
    name: 'licence',
    choices:['MIT', 'Apache', 'GNU', 'N/A'],
   },
   {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'git',
   },
   {
    type: 'input',
    message: 'Where can questions about your application be sent?',
    name: 'email',
   },

  ]
).then (({
  title,
  description,
  installation,
  use,
  contributing,
  tests,
  licence,
  git,
  email,

})=>{
const generate = `# ${title}

*[Description](#description)
*[Installation](#installation)
*[Use](#use)
*[Contributing](#contributing)
*[Tests](#tests)
*[Licence](#licence)
*[Git](#git)
*[Email](#email)
# Description
${description}
## Installation
${installation}
## Use
${use}
## Contributing
${contributing}
## Tests
${tests}
## Licence
${licence}
## Git
${git}
## Email
${email}`;

writeToFile(title, generate);
}
)


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./${fileName.toLowerCase().split(' ').join(' ')}.md`, data,(err) => {
    if(err){
      console.log(err);
    }
    console.log('Your README has been generated');
  })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
