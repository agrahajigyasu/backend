const fs = require('fs');

let read_json_file = () => {
    let file = './data/bikejson.json';
    return fs.readFileSync(file);
}

exports.list = function() {
    return JSON.parse(read_json_file());
};

exports.add_tax = (value) => {
    let json_result = JSON.parse(read_json_file());
    let result = json_result;
    console.log("add tax: " + value);
    let tax = 0.075;
    if(value=="India")
        tax = 0.075;
    else if(value=="USA")
        tax = 0.08;
    else
        return null;
    for (let i = 0; i < result.length; i++) {
        result[i]["price"] = result[i]["price"] + result[i]["price"]*tax;
        result[i]["price"] = result[i]["price"].toFixed(2);
    }
    return result;
};