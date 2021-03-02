let chalk = require("chalk");
function help() {
  console.log(
    chalk.redBright.bold(
      `List of all the commands:` +
        chalk.keyword("orange")(
          `
    rikrak view <dir-name> flat
    rikrak view <dir-name> tree
    rikrak organize <dir-name>
    rikrak organize 
    rikrak help
  `
        )
    )
  );
}

module.exports = {
  fn: help,
};
