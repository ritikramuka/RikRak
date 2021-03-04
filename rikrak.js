#!/usr/bin/env node

let input = process.argv.slice(2);
let command = input[0];
let chalk = require('chalk');
let helpFile = require("./commands/help");
let viewFile = require("./commands/view");
let organizeFile = require("./commands/organize");
let disorganizeFile = require("./commands/disorganize");
switch (command) {
  case "view":
    viewFile.fn(input[1], input[2]);
    break;
  case "organize":
    if (input.length == 1) organizeFile.fn(process.cwd());
    else organizeFile.fn(input[1]);
    break;
  case "disorganize":
    if (input.length == 1) disorganizeFile.fn(process.cwd());
    else disorganizeFile.fn(input[1]);
    break;
  case "help":
    helpFile.fn();
    break;
  default:
    console.log(chalk.magentaBright.bold("invalid command run rikrak help command for commands"));
    break;
}
