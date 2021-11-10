const fs = require('fs');

let readJsonFile = (file) => {
    return fs.readFileSync(file);
}
    
exports.teamList = function() {   
    return JSON.parse(readJsonFile('./data/team.json'));   
};

exports.priceList = (location) => {
    let result = JSON.parse(readJsonFile('./data/Toysjson.json'));

    for (let idx = 0; idx < result.length; idx++) {
        let toy = result[idx];
        if (location==="USA"){
            newPrice= toy.price+ (0.08*toy.price);
            result[idx].price= newPrice;
        }
        else if (location==="India") {
            newPrice= toy.price+ (0.075*toy.price);
            result[idx].price= newPrice;
        }
        else{
            return null;
        }
    }
    return result;
};
