const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const toys = require('../modules/toys');
const url = require('url');

router.get('/', function(req, res, next) {
  res.status(200).send({ 
    status: "Good To Go!" ,
    links: [
      "/toyservice/all/:location",
      "/toyservice/team"
    ]});
});

router.get('/toyservice/all/:location', (request, response, next) => {
  const location = request.params.location;
  console.log('got into toys/all/: ' + location);

  if (!(location ==="USA" || location === "India")){
    response.status(400).send({
      error : "We only provide information for USA and India." });
  }
  else{
    const result = toys.priceList(location);
    if (result) {
      response.setHeader('content-type', 'application/json');
      response.end(JSON.stringify(result));
    } 
    else {
      response.status(404).send({ error: "Something Went wrong" });
    }
  }
});

router.get('/toyservice/team', (request, response, next) => {
  const result = toys.teamList();
  if (result) {
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify(result));
  } 
  else {
    response.status(404).send({ error: "Something Went wrong" });
  }
});

module.exports = router;
