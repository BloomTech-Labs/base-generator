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