let util = require("./util");
let fs = require("fs");
let path = require("path");
let IntialStructure = require("./IntialStructure");

function checkFileOrFolder(path) {
  return fs.lstatSync(path).isDirectory();
}

function ChildsPath(dirName, child) {
  return path.join(dirName, child);
}

function AllChilds(dirName) {
  return fs.readdirSync(dirName);
}

function organize(dirName) {
  if(!fs.existsSync(path.join(dirName, 'IntialStructure'))) {
    IntialStructure.fn(dirName);
  }
  let organizeDir = path.join(dirName, "organize");
  if (!fs.existsSync(organizeDir)) {
    fs.mkdirSync(organizeDir);
  }
  organizeFile(dirName, organizeDir);
  deleteFile(dirName);
}

function organizeFile(src, desti) {
  if (checkFileOrFolder(src)) {
    let childrens = AllChilds(src);
    for (let i = 0; i < childrens.length; i++) {
        organizeFile(ChildsPath(src, childrens[i]), desti);
    }
  } else {
    let DestiFolderName = checkExtension(src);
    sendFile(src, desti, DestiFolderName);
  }
}

function checkExtension(src) {
  let ext = src.split(".").pop();
  for (let type in util.types) {
    for (let i = 0; i < util.types[type].length; i++) {
      if (util.types[type][i] == ext) return type;
    }
    return "others";
  }
}

function sendFile(src, desti, DestiFolderName) {
  let folderToMake = path.join(desti, DestiFolderName);
  if (!fs.existsSync(folderToMake)) {
    fs.mkdirSync(folderToMake);
  }
  let pathOfDestiFilePath = path.join(folderToMake, path.basename(src));
  fs.copyFileSync(src, pathOfDestiFilePath);
}

function deleteFile(dirName) {
  let children = AllChilds(dirName);
  for(let i = 0; i < children.length; i++) {
    if(children[i] != "organize" && children[i] != "IntialStructure.json") {
      fs.rmdirSync(path.join(dirName, children[i]), { recursive: true });
    }
  }
}

module.exports = {
  fn: organize,
};
