// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { //license will be the name of a list object in the questions array 
  if (!license) {
    return '';
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}] (${renderLicenseLink(license)})` //Used a public git repo that had several links to liscenses available and repurposed the link to create this universal one - link : https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba - I hope this isnt cheating, figured this would be okay to use!
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else {
    return `[${license}] (https://choosealicense.com/licenses/${license})` //link located on the same github repo 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else { 
    return `
    *[License](#license)`; // will be used to create a table of contents item - might change this to be a statement about the liscense - will see what guides on READMEs say 
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents 
  *[Description](#description)
  *[Requirements](#requirements)
  *[Installation](#installation)
  *[useage](#useage)
  *[licence](#licence) 
  *[Examples](#examples)
  *[Contact](#contact)

  ## Description
  ${data.description} 

  ## Requirements
  ${data.requirements}

  ## Installation
  ${data.installation}

  ## Useage
  ${data.useage}

  ## License 
  ${renderLicenseSection(data.license)}

  ## Examples 
  ${data.examples}

  ## Contact 
  Thank you for your interest in my application, ${data.title}! 
  If you have any questions, concerns, or would like to reach out for any other reason;
  My Github: ${data.gitCredentials}
  My Email: ${data.email}


  Signed - ${data.name}
`;
}

module.exports = generateMarkdown;
