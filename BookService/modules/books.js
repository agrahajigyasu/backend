
let bookJson = './data/Booksjson.json';
const fs = require('fs');

let read_json_file = () => {
    //TODO: Change if we need to account for fidzulu folder
    let file = './data/Booksjson.json';
    return fs.readFileSync(file);
}

exports.list = function() {
    return JSON.parse(read_json_file());
}


exports.add_book = (bookToAdd) => {
    try {
        let json_result = JSON.parse(read_json_file());
        json_result.push(bookToAdd);
        let data = JSON.stringify(json_result);
        fs.writeFileSync('./data/Booksjson.json', data);
        console.log(JSON.parse(read_json_file()));
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

exports.price_difference = (value) => {
    let result = JSON.parse(read_json_file());
    // console.log(json_result);
    // let result = json_result.result;
    // console.log(result);
    // console.log("arg: " + value);
    for(let i = 0; i < result.length; i++) {
        let books = result[i];
        if(value == "India") {
            books["price"] = books["price"] * 1.075;
            
        } else if (value == "USA") {
            books["price"] = books["price"] * 1.08;
        } else {

        }
        
    }
    return result;
};
