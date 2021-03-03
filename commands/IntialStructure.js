function ChildsPath(dirName, child) {
    return path.join(dirName, child);
}

function IntialStructure(dirName) {
    var fs = require('fs');
    path = require('path');

    function dirTree(dirName) {
        var stats = fs.lstatSync(dirName),
            info = {
                path: dirName,
                name: path.basename(dirName)
            };

        if (stats.isDirectory()) {
            info.type = "folder";
            info.children = fs.readdirSync(dirName).map(function (child) {
                return dirTree(ChildsPath(dirName, child));
            });
        } else {
            info.type = "file";
        }

        return info;
    }

    let IntialStructure = JSON.stringify(dirTree(dirName));
    jsonPath = path.join(dirName, 'IntialStructure.json');
    fs.writeFileSync(jsonPath, IntialStructure);
}

module.exports = {
    fn: IntialStructure,
};