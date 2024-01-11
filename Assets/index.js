const fs = require('fs');
const inquirer = require('inquirer');

// Function to generate the README content
function generateREADME(data) {
  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license !== 'N/A' ? 
`This project is licensed under the terms of the ${data.license} license.` : 
'This project is not licensed.'}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact [${data.username}](https://github.com/${data.username}) or email at ${data.email}.
`;
}

// Function to prompt user for input
function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter your project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter project description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['N/A', 'Apache License 2.0', 'GNU General Public License', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ]);
}

// Main function to run the application
async function init() {
  try {
    const userInputs = await promptUser();
    const readmeContent = generateREADME(userInputs);

    // Write the README file
    fs.writeFileSync('README.md', readmeContent);

    console.log('README.md generated successfully!');
  } catch (error) {
    console.error('Error generating README:', error);
  }
}

// Run the application
init();
