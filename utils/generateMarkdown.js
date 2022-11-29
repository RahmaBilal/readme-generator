//  A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  let licenseBadge;
  switch (license) {
    case "MIT":
      licenseBadge =
        "https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT";
      break;
    case "ISC":
      licenseBadge =
        "https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC";
      break;
    case "MOZILLA":
      licenseBadge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "IBM":
      licenseBadge =
        "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      break;
    case "None":
      licenseBadge = "";
      break;
  }
};
// Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  let licenseLink;
  switch (license) {
    case "MIT":
      licenseLink = "\nFind out more on: https://opensource.org/licenses/MIT";
      break;
    case "ISC":
      licenseLink = "\nFind out more on: https://opensource.org/licenses/ISC";
      break;
    case "MOZILLA":
      licenseLink =
        "\nFind out more on: https://opensource.org/licenses/MOZILLA";
      break;
    case "IBM license":
      licenseLink =
        "\nFind out more on: https://opensource.org/licenses/IPL-1.0";
      break;
    case "None":
      licenseLink = "";
      break;
  }
  return licenseLink;
};

//  A function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license === "None") {
    return "No";
  } else {
    return license;
  }
};

//  A function to generate markdown for README
const generateMarkdown = (data) => {
  console.log(data);
  return `# ${data.title}
    
  ![Badge](http://img.shields.io/badge/license-${data.license}-blue.png)
    
  
  ## Table of Contents
  
  * [Description](#description)
  * [Usage](#usage)
  * [Installation](#installation)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
    
    
  ## Description:
    ${data.description}
  
  ## Usage:
    ${data.usage}
  
  ## Installation
    ${data.installation}
    
  
  ## License: 
    ${data.license}
  
   ${renderLicenseLink(data.license)}

  ## Contributing: 
    ${data.contributing}
  
  ## Tests:
    ${data.tests}

  ## Questions:
    If you have any queries about this project or you would like to contribute, then please contact me on ${
      data.email
    }.
    This repo can be viewed at https://github.com/${data.github}
  `;
};

module.exports = generateMarkdown;
