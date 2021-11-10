const fs = require('fs');

let readJsonFile = (file) => {
    return fs.readFileSync(file);
}
    
exports.teamList = function() {   
    return JSON.parse(readJsonFile('./data/team.json'));   
};

exports.priceList = (location) => {
    let result = JSON.parse(readJsonFile('./data/Laptopsjson.json'));

    for (let idx = 0; idx < result.length; idx++) {
        let laptop = result[idx];
        if (location==="USA"){
            newPrice= laptop.price+ (0.08*laptop.price);
            result[idx].price= newPrice;
        }
        else if (location==="India") {
            newPrice= laptop.price+ (0.075*laptop.price);
            result[idx].price= newPrice;
        }
        else{
            return null;
        }
    }
    return result;
};

exports.addLaptop = (laptop) => {
    try {
        let result = JSON.parse(readJsonFile('./data/Laptopsjson.json'));
        result.push(laptop);
        let data = JSON.stringify(result);
        fs.writeFileSync('./data/Laptopsjson.json', data);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};
