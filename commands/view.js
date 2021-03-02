const fs = require("fs");
const path = require("path");
let chalk = require('chalk');

function view(dirName, mode) {
  if (mode == "tree") {
    console.log(printTree(dirName, ""));
  } else if (mode == "flat") {
    console.log(printFlat(dirName));
  } else {
    console.log("wrong command type help for commands");
  }
}

function checkFileOrFolder(path) {
  return fs.lstatSync(path).isDirectory();
}

function ChildsPath(dirName, child) {
  return path.join(dirName, child);
}

function AllChilds(dirName) {
  return fs.readdirSync(dirName);
}

function printFlat(dirName) {
  if (checkFileOrFolder(dirName)) {
    console.log(chalk.greenBright.bold.italic(dirName));
    let childrens = AllChilds(dirName);
    for (let i = 0; i < childrens.length; i++) {
      printFlat(ChildsPath(dirName, childrens[i]));
    }
  } else {
    console.log(chalk.greenBright.bold.italic(dirName));
  }
}

//ssf -> space so far
function printTree(dirName, ssf) {
  if (checkFileOrFolder(dirName)) {
    console.log(chalk.yellowBright.bold.italic(ssf + path.basename(dirName)));
    let childrens = AllChilds(dirName);
    for (let i = 0; i < childrens.length; i++) {
      printTree(ChildsPath(dirName, childrens[i]), ssf + "\t");
    }
  } else {
    console.log(chalk.yellowBright.bold.italic(ssf + path.basename(dirName)));
  }
}

module.exports = {
  fn: view,
};
