const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const laptops = require('../modules/laptops');
const url = require('url');

router.get('/', function(req, res, next) {
  res.status(200).send({ 
    status: "Good To Go!" ,
    links: [
      "/laptopservice/all/:location",
      "/laptopservice/team",
      '/laptopservice/add'
    ]});
});

router.get('/laptopservice/all/:location', (request, response, next) => {
  const location = request.params.location;
  console.log('got into laptopservice/all/: ' + location);

  if (!(location ==="USA" || location === "India")){
    response.status(400).send({
      error : "We only provide information for USA and India." });
  }
  else{
    const result = laptops.priceList(location);
    if (result) {
      response.setHeader('content-type', 'application/json');
      response.end(JSON.stringify(result));
    } 
    else {
      response.status(404).send({ error: "Something Went wrong" });
    }
  }
});

router.get('/laptopservice/team', (request, response, next) => {
  const result = laptops.teamList();
  if (result) {
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify(result));
  } 
  else {
    response.status(404).send({ error: "Something Went wrong" });
  }
});

router.post('/laptopservice/add', function( req, res, next) {
  console.log(req.body);
  const laptop = req.body;
  let added = laptops.addLaptop(laptop);
  res.setHeader('content-type', 'application/json');
  if(added){
    res.status(201).send({ statusCode: "Successfully added!" });
  } else {
    res.status(500).send({ error: "Could not write object to JSON file" });
  }
});

module.exports = router;
