# ch9-node-readme-generator

### User Story
``````
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project 
``````

### Acceptance Criteria
``````
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
``````
## Development
* Cloned starter code from repo listed on the assignment page and received some assistance from classmates. 
* Added a separate array for the different licenses the user can select from, this is the same list that is avaiable when creating a Github repo. License badge images are from shields.io and the license links direct to choosealicense.com where full license text is housed. 
* Ran into some issues with the license badge not displaying correctly but this was due to some typos in the license array. Also encountered issues with the placement of the badge and link, original placement caused too much blank space between the title and table of contents.

## Video Walkthrough
[Video](https://drive.google.com/file/d/14AeWKSujGvbjxzaL0ReHxjb3DIZ5RnN7/view?pli=1)