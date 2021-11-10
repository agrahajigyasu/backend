const { Console } = require('console');
const { json } = require('express');
const fs = require('fs');

let read_json_file = () => {
    let file = './data/DVDsjson.json';
    return fs.readFileSync(file);
}

exports.list = function () {
    return JSON.parse(read_json_file());
};

exports.get_taxed_dvds = (salesTax) => {
    if (salesTax < 0) {
        return -1;
    }

    let json_result = JSON.parse(read_json_file());

    for (let i = 0; i < json_result.length; i++) {
        let dvdPrice = json_result[i].price;
        dvdPrice *= (1 + salesTax);

        json_result[i].price = Number(dvdPrice.toFixed(2));
    }

    return json_result;
};

