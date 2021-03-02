let chalk = require("chalk");
function help() {
  console.log(
    chalk.redBright.bold(
      `List of all the commands:` +
        chalk.keyword("orange")(
          `
    node rikrak.js view <dir-name> flat
    node rikrak.js view <dir-name> tree
    node rikrak.js organize <dir-name>
    node rikrak.js organize 
    node rikrak.js help
  `
        )
    )
  );
}

module.exports = {
  fn: help,
};
