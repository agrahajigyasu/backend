const fs = require('fs');

let read_json_file = () => {
    let file = './data/team.json';
    return fs.readFileSync(file);
}

exports.list = function() {
    return JSON.parse(read_json_file());
};