let fs = require("fs");
let path = require("path");

disorganize(process.argv[2]);

function disorganize(dirName) {
    if (fs.existsSync(path.join(dirName, 'IntialStructure.json'))) {
        let structure = JSON.parse(fs.readFileSync(path.join(dirName, 'IntialStructure.json')));
        let organizeDir = path.join(dirName, "organize");
        disorganizeFile(structure, organizeDir, dirName);
    }
}

function disorganizeFile(structure, organizeDir, currentDir) {
    if (structure.type == "folder") {
        let folderToMake = path.join(currentDir, structure.name);
        if (!fs.existsSync(folderToMake)) {
            fs.mkdirSync(folderToMake);
        }
        for (const child in structure.children) {
            disorganizeFile(structure.children[child], organizeDir, structure.path);
        }
    } else {
        let src = pathInOrgDir(structure.name, organizeDir);
        if (!fs.existsSync(structure.path)) {
            if (src != undefined)
                fs.copyFileSync(src, structure.path);
        }
    }
}

function pathInOrgDir(name, dirName) {
    let children = AllChilds(dirName);
    for (let i = 0; i < children.length; i++) {
        let childsPath = path.join(dirName, children[i]);
        let child = AllChilds(childsPath);
        for (let j = 0; j < child.length; j++) {
            if (child[j] == name)
                return path.join(childsPath, child[j]);
        }
    }
}

function AllChilds(dirName) {
    return fs.readdirSync(dirName);
}

module.exports = {
    fn: disorganize,
};