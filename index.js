const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of this README?",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install this project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How will you use this application?",
    },
    {
      type: "input",
      name: "summary",
      message: "Provide a project summary",
    },
    {
      type: "input",
      name: "functionality",
      message: "What function does this project perform?",
    },
    {
      type: "list",
      name: "license",
      message: "How do you want to license this project?",
      choices: ["MIT", "ISC", "Mozilla", "IBM"],
    },
    {
      type: "input",
      name: "testFunction",
      message: "Is there a test function for the application?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ]);
};

const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.error(err)
      : console.log("README.md file created successfully!")
  );
};

const init = () => {
  questions().then((answers) =>
    writeToFile("README.md", generateMarkdown(answers))
  );
};

init();
