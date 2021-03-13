function help() {
  console.log(

    `List of all the commands:
    rikrak view <dir-name> flat
    rikrak view <dir-name> tree
    rikrak organize <dir-name>
    rikrak organize
    
    To Revert Organize Command

    rikrak disorganize <dir-name>
    rikrak disorganize

    rikrak help
    `
  );
}

module.exports = {
  fn: help,
};
