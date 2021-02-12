function help() {
  console.log(`List of all the commands:
    node rikrak.js view <dir-name> flat
    node rikrak.js view <dir-name> tree
    node rikrak.js organize <dir-name>
    node rikrak.js organize 
    node rikrak.js help
  `);
}

module.exports = {
  fn: help,
};
