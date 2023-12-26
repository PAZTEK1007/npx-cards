// Modules

const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const boxen = require('boxen');

// Define Options

const options = 
{
    padding: 1,
    margin: 1,
    borderStyle: 'round',
    borderColor: 'green'
};

const data =
{
    name: chalk.white('             Mathias Barbier'),
    handle: chalk.white('PAZTEK'),
    work: chalk.white('Junior Web Developer'),
    github: chalk.white('www.github.com/') + chalk.green('PAZTEK1007'),
    linkedin: chalk.white('www.linkedin.com/in/') + chalk.blue('mathias-barbier'),
    labelWork: chalk.white.bold('       Work:'),
    labelGitHub: chalk.white.bold('     GitHub:'),
    labelNPM: chalk.white.bold('         npm:'),
    labelLinkedIn: chalk.white.bold('   LinkedIn:')
};

// Actual Text

const newline = '\n';
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const npming = `${data.labelNPM}  ${data.npm}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;

// Make Output

const output = heading +
                newline + newline +
                working + 
                newline +
                githubing + 
                newline +
                npming + 
                newline +
                linkedining;

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)));
            
