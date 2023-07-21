// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// license badge from Shields.io: https://img.shields.io/badge/any_text-you_like-blue
// replace any_text with license name
function renderLicenseBadge(license) {
  const licenseBadgeParam = license.replace(/ /g, '_'); // replace spaces with underscores for URL

  switch (license) {
    case 'None':
      return '';
    case 'Apache 2.0':
    case 'GNU GPL v3':
    case 'BSD 2 Clause':
    case 'BSD 3 Clause': 
    case 'BSL 1.0': 
    case 'Creative Commons Zero v1':
    case 'Eclipse Public 2.0':
    case 'GNU Alfero v3.0':
    case 'GNU General 2.0': 
    case 'GNU Lesser General 2.1':
    case 'Mozilla Public License 2.0': 
    case 'MIT License':
    case 'The Unlicense':
      return `https://img.shields.io/badge/${licenseBadgeParam}-blue` // badge URL
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// license link: https://choosealicense.com/licenses/
function renderLicenseLink(license) {
  const licenseLinkURL = 'https://choosealicense.com/licenses/';
  
  switch (license) { // all links should work
    case 'None':
      return '';
    case 'Apache 2.0':
      return licenseLinkURL + 'apache-2.0/';
    case 'GNU GPL v3':
      return licenseLinkURL + 'gpl-3.0/';
    case 'BSD 2 Clause':
      return licenseLinkURL + 'bsd-2-clause/';
    case 'BSD 3 Clause': 
      return licenseLinkURL + 'bsd-3-clause/';    
    case 'BSL 1.0': 
      return licenseLinkURL + 'bsl-1.0/';
    case 'Creative Commons Zero v1':
      return licenseLinkURL + 'cc0-1.0/';
    case 'Eclipse Public 2.0':
      return licenseLinkURL + 'epl-2.0/';
    case 'GNU Alfero v3.0':
      return licenseLinkURL + 'agpl-3.0/';
    case 'GNU General 2.0': 
      return licenseLinkURL + 'gpl-2.0/';
    case 'GNU Lesser General 2.1':
      return licenseLinkURL + 'lgpl-2.1/';
    case 'Mozilla Public License 2.0': 
      return licenseLinkURL + 'mpl-2.0/';
    case 'MIT License':
      return licenseLinkURL + 'mit/';
    case 'The Unlicense':
      return licenseLinkURL + 'unlicense/';
  }
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  let licenseHeader = '## License';
  let licenseText = `This project is licensed under the [${license}] ${licenseLink} license.`;

  if (license === 'None') {
    return '';
  } else {
    return `
    ${licenseHeader}
    ${licenseText}
    `
  }
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  let licenseBadge = '[' + renderLicenseBadge(data.license) + ']';
  let licenseLink = '(' + renderLicenseLink(data.license) + ')';
  let licenseSection = renderLicenseSection(data.license);

  let tableofContents = `
  ## Table of Contents
  * [Description](#description)
  * [License](#license)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
  `

  if (data.license === 'None') { // if no license selected, remove license section from table of contents
    `
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)
    `
    licenseBadge = '';
    licenseLink = '';
  }

  return `# ${data.title}
  ${licenseBadge}${licenseLink}

  ${tableofContents}

  ## Description 
  ${data.description}

  ${licenseSection}

  ## Installation
  ${data.installation}
  
  
`;
}

module.exports = generateMarkdown;
