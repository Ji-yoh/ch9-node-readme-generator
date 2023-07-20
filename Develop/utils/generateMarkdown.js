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
    case 'BSD 2':
    case 'BSD 3': 
    case 'Boost': 
    case 'Creative Commons Zero v1':
    case 'Eclipse Public 2.0':
    case 'GNU Alfero v3.0':
    case 'GNU General 2.0': 
    case 'GNU Lesser General 2.1':
    case 'Mozilla Public 2.0': 
    case 'MIT':
    case 'The Unlicense':
      return `https://img.shields.io/badge/${licenseBadgeParam}-blue` // badge URL
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// license link: https://choosealicense.com/licenses/
function renderLicenseLink(license) {}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  ## ${data.description}
  ## ${data.contents}
  
`;
}

module.exports = generateMarkdown;
