// Function to render the license badge
function renderLicenseBadge(license) {
  if (license) {
    // return `![License](https://img.shields.io/badge/license-${license}-brightgreen)`;
  } else {
    return '';
  }
}

// Function to render the license link
function renderLicenseLink(license) {
  if (license) {
    return `[${license} License](#license)`;
  } else {
    return '';
  }
}

// Function to render the license section of README
function renderLicenseSection(license) {
  if (license) {
    return `## License
This project is licensed under the ${license} license.`;
  } else {
    return '';
  }
}

// Function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact [${data.username}](https://github.com/${data.username}) or email at ${data.email}.
`;
}

module.exports = generateMarkdown;
