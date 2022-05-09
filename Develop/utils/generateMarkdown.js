// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const avalLicense = {
  MIT: {
    Badge: "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    Link: "(https://opensource.org/licenses/MIT)"
  },
  MicrosoftPublicLicense: {
    Badge: "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)",
    Link: "(https://opensource.org/licenses/MPL-2.0)"
  },
  ISC: {
    Badge: "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)",
    Link: "(https://opensource.org/licenses/ISC)"
  }
}

function renderLicenseBadge(license) {
  if (license == "MIT") {
    return avalLicense.MIT.Badge;
  }
  if (license == "MicrosoftPublicLicense") {
    return avalLicense.MicrosoftPublicLicense.Badge;
  }
  if (license == "ISC") {
    return avalLicense.ISC.Badge;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return avalLicense.MIT.Link;
  }
  if (license == "MicrosoftPublicLicense") {
    return avalLicense.MicrosoftPublicLicense.Link;
  }
  if (license == "ISC") {
    return avalLicense.ISC.Link;
  } else {
    return '';
  }
}




// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);



  return `
  # ${data.title}
  # Table of Contents:
  - [License](#license)
  - [Description](#description)
  - [Instructions](#instructions)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ${renderLicenseSection(data.license)}
  ## Description:
  ${data.description}
  ## Instructions:
  ${data.instructions}
  ## Usage:
  ${data.usage}
  ## Contribution:
  ${data.contribution}
  ## Tests: 
  ${data.tests}
  ## Questions??? 
  ${data.questions}
  
  ${data.email}`
};

module.exports = generateMarkdown;
