// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None") {
    badge = ""
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  if (license != "None") {
    licenseSection += "## Liscense\n"
    licenseSection += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n";
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const sections = ["Description", "Installation", "Usage", "Contributing", "Tests", "License", "Questions"];
}

module.exports = generateMarkdown;
