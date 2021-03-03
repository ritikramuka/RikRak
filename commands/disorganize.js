let fs = require("fs");
let path = require("path");

function disorganize(dirName) {
    if (!fs.existsSync(path.join(dirName, 'IntialStructure'))) {
        
    }
}

module.exports = {
    fn: disorganize,
};