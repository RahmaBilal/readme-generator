const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown")

const questions = () => {
return inquirer.prompt([
    {
        type: "input",
        message: "projectName",
        name: "What is the title of your project?"
    },
    {
        type: "input",
        message: "summary",
        name: "Provide a project summary"
    },
    {
        type: "input",
        message: "installation",
        name: "How do you install this project?"
    },
    {
        type: "input",
        message: "functionality",
        name: "What function does this project perform?"
    },
    {
        type: "list",
        message: "license",
        name: "How do you want to license this project?",
        choices: [
            "MIT", "ISC", "Mozilla", "IBM"
        ],
    },
    {
        type: "input",
        message: "testFunction",
        name: "Is there a test function for the application?"
    },
    {
        type: "input",
        message: "README heading",
        name: "heading"
    },
    {
        type: "input",
        message: "README heading",
        name: "heading"
    },
    {
        type: "input",
        message: "README heading",
        name: "heading"
    },
    {
        type: "input",
        message: "README heading",
        name: "heading"
    },

    ]
)};