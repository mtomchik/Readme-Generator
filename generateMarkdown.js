const inquirer = require('inquirer');
const fs = require('fs');
const index = require('./index')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license;
  let yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'Apache') {
    yourLicense = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }  else if (licenseType === 'GNU') {
    yourLicense = `![License: GNU ](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  }else {
    yourLicense = "N/A"
  }
  return yourLicense;
};

function generateMarkdown(answer) {
  return `# ${answer.license}
  ## License 
  ${renderLicenseBadge(license)}
  `};
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    let licenseType = license;
    let yourLicense = ''
    if(licenseType === 'MIT') {
      yourLicense = `![License: MIT](https://opensource.org/licenses/MIT)`
    } else if (licenseType === 'Apache') {
      yourLicense = `![License](https://opensource.org/licenses/Apache-2.0)`
    }  else if (licenseType === 'GNU') {
      yourLicense = `![License: GNU](https://www.gnu.org/licenses/gpl-3.0)`
  }else {
    yourLicense = "N/A"
  }
  return yourLicense;
};

function generateMarkdown(answer) {
  return `# ${answer.title}
  ## License 
  ${renderLicenseLink(license)}
  `}
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseType = license;
  let yourLicense = ''
  if(licenseType === '') {
    yourLicense = "N/A"
  }else {
    licenseType = `license: ${license}`
  }
  return yourLicense;
};


// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}

  *[Description](#description)
  *[Installation](#installation)
  *[Use](#use)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[license](#license)
  *[Git](#git)
  *[Email](#email)
  # Description
  ${answer.description}
  ## Installation
  ${answer.installation}
  ## Use
  ${answer.use}
  ## Contributing
  ${answer.contributing}
  ## Tests
  ${answer.tests}
  ## license
  ${renderLicenseBadge(answer.license), renderLicenseLink(answer.license), renderLicenseSection(answer.license)}
  ## Git
  ${answer.git}
  ## Email
  ${answer.email}`
}

module.exports = generateMarkdown;
