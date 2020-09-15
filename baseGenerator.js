const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
    this.prompts = [];
  }

  _makePromptOption(name, promptOpts, optionOpts) {
    optionOpts.name = promptOpts.name = name;
    if (optionOpts.alias) promptOpts.alias = optionOpts.alias;
    this.option(name, optionOpts);
    this.prompts.push(promptOpts);
  }

  _makeProgram() {
    this._makePromptOption(
      'program',
      {
        type: 'list',
        message: 'What is the project type?',
        choices: [
          {
            name: 'Buid Weeks',
            value: 'bw',
          },
          {
            name: 'Labs',
            value: 'labs',
          },
        ],
        default: 'labs',
        store: true,
      },
      {
        type: String,
        alias: 'p',
        desc: 'Which program will this be used for: "bw" or "labs"',
      }
    );
  }

  _makeHasDS() {
    this._makePromptOption(
      'hasDS',
      {
        type: 'confirm',
        message: 'Does your project have Data Science team members?',
        default: false,
      },
      {
        type: (val) => { return (val==='false' ? false : true)},
        alias: 'd',
        desc: 'project has DS team members',
      }
    );
  }

  _makeRepoUrl() {
    this._makePromptOption(
      'repoUrl',
      {
        type: 'input',
        message: 'Enter your Github repo HTTPS git url (https://github.com/user/repo-name)',
        default: '',
        store: true,
      },
      {
        type: String,
        alias: 'r',
        desc: 'The Github repo HTTPS git url. eg, https://github.com/lambda-school-labs/labsNN-productA-teamB-fe',
      }
    );
  }
  
  _removePrompt(name) {
    this.prompts.splice(
      this.prompts.findIndex((element) => name === element.name),
      1
    );
    return this.prompts;
  }

  _removePrompts() {
    var promptsToRemove = [];
    this.prompts.forEach((prompt) => {
      if (this.options[prompt.name] || this.options[prompt.alias]) {
        this.initialData[prompt.name] = this.options[prompt.name];
        promptsToRemove.push(prompt.name);
      }
    });
    promptsToRemove.forEach((prompt) => this._removePrompt(prompt));
  }
}