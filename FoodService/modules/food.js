const fs = require('fs');
let currencyJson = './data/Currency.json';
let foodFile = './data/food.json';
let locationJson = './data/Location.json';
    
let read_json_file = (file) => {
    return fs.readFileSync(file);
}
    
exports.list = () => {
    return JSON.parse(read_json_file(foodFile));
}

exports.teamList = function() {   
    return JSON.parse(read_json_file('./data/team.json'));   
};

exports.priceList = (location) => {
    let result = JSON.parse(read_json_file(foodFile));

    for (let idx = 0; idx < result.length; idx++) {
        let food = result[idx];
        if (location==="USA"){
            newPrice= food.price+ (0.08*food.price);
            result[idx].price= newPrice;
        }
        else if (location==="India") {
            newPrice= food.price+ (0.075*food.price);
            result[idx].price= newPrice;
        }else{
            return null;
        }
    }
    return result;
};