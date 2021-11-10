const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const bikes = require('../modules/bikes');
const team = require('../modules/team');
const url = require('url');

router.get('/', function(req, res, next) {
  res.status(200).send({ 
    status: "Good To Go!" ,
    links: [
      "/bikeservice/all/:location",
      "/bikeservice/team"
    ]});
});

router.get('/bikeservice/all/:location', (request, response, next) => {
  const param = request.params.location;
  console.log('got into bikeservice/all/:location ' + param);
  const result = bikes.add_tax(param);
  if (result) {
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify(result));
  } else {
    response.status(404).send({ error: "We only provide information for USA and India." });
  }
});

router.get('/bikeservice/all', (request, response, next) => {
  let get_params = url.parse(request.url, true).query;
  console.log('got into bikes');
  if (Object.keys(get_params).length == 0) {
    console.log('no params');
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify(bikes.list()));
  }
  else {
    let key = Object.keys(get_params)[0];
    console.log("First key is: " + key);
    let value = request.query[key];
    console.log('params ' + value);
    let result = bikes.add_tax(value);
    if (result) {
      response.setHeader('content-type', 'application/json');
      response.end(JSON.stringify(result));
    } else {
      next(createError(404));
    }
  }   
});


router.get('/bikeservice/team', (request, response, next) => {
  console.log('got into team');
  response.setHeader('content-type', 'application/json');
  response.end(JSON.stringify(team.list()));
});

module.exports = router;
