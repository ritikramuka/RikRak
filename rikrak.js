let input = process.argv.slice(2);
let command = input[0];
let helpFile = require("./commands/help");
let viewFile = require("./commands/view");
let organizeFile = require("./commands/organize");
switch (command) {
  case "view":
    viewFile.fn(input[1], input[2]);
    break;
  case "organize":
    organizeFile.fn();
    break;
  case "help":
    helpFile.fn();
    break;
  default:
    console.log("invalid command run rikrak help command for commands");
    break;
}
