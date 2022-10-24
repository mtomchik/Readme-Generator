// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');
const { title } = require('process');

// TODO: Create an array of questions for user input
const questions= [
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
   message: 'What license would you like to use?',
   name: 'license',
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



// TODO: Create a function to write README file
const writeToFile = fileContent =>  {
  return new Promise((resolve, reject) =>
  fs.writeFile(`./generatedREADME.md`, fileContent,(err) => {
    if(err){
      reject(err);
      return;
    }
    resolve('Your README has been generated');
  }));
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function(answer){
    const fileContent = generateMarkdown(answer);
    writeToFile(fileContent);
      });
    }

// Function call to initialize app
init();
module.exports = questions;