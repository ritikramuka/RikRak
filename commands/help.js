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
    rikrak organize \n`
        + chalk.keyword("white")(
          `\n    To Revert Organize Command`
        ) + `
    rikrak disorganize <dir-name>
    rikrak disorganize 
    \n    rikrak help
  `
      )
    )
  );
}

module.exports = {
  fn: help,
};
