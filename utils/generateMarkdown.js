// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(license) {
  let badge = "";

  if(license != "None") {
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-blue)";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  let licenseLink;

  // pick a license for the generated README file 
  switch(license) {
    case "MIT":
      licenseLink = "https://mit-license.org/";
      break;
    case "BSD":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "GLP":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    default: 
      licenseLink = "";
      break;
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  let licenseSection = "";

// creates a licenseSection and adds the chossen license link to the created section 
  if (license != "None") {
    licenseSection += "## Liscense\n"
    licenseSection += "Please see " + renderLicenseLink(license) + " to get detailed information for this license\n";
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  const sections = ["description", "installation", "usage", "contributing", "license", "questions"];

  let markdown = "# " + data.title + "\n";

  markdown += renderLicenseBadge(data.license) + "\n";

  markdown += "\n## Table of Contents\n";
  for (let i = 0; i < sections.length; i++) {
    if (! (sections[i] === "License" && data.license === "None")) {
      markdown += i+1 + ". [" + sections[i] + "](#" + sections[i][0].toUpperCase() + sections[i].substring(1) + ")\n";
    }
  }

  markdown += "\n";

  markdown += "## " + sections[0] + "\n";
  markdown += data.description + "\n";

  markdown += "## " + sections[1] + "\n";
  markdown += data.installation + "\n";

  markdown += "## " + sections[2] + "\n";
  markdown += data.usage + "\n";

  markdown += "## " + sections[3] + "\n";
  markdown += data.guidelines + "\n";

  markdown += "## " + sections[4] + "\n";
  markdown += data.tests + "\n";

  markdown += renderLicenseSection(data.license) + "\n";

  markdown += "## " + sections[5] + "\n";
  markdown += "You can find me on [GitHub](https://github.com/" + data.username + ") on GitHub\n";
  markdown += "You can conntact me at " + data.email + " with any questions\n";

  return markdown;
}

module.exports = generateMarkdown;
