const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const url = require('url');

const http = require('http')
const request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Middleware' });
});

router.get('/classB/:service/all/:location', (req, response, next) => {

  let service = req.params.service;
  let location = req.params.location;
  
  let port;
  if(service === "bookservice") {
    port = 3034;
  }
  if(service === "dvdservice") {
    port = 3035;
  }
  if(service === "laptopservice") {
    port = 3036;
  }

  if (location === "India") {
    request('http://127.0.0.1:'+ port +'/' + service + '/all/India', { method: 'GET' }, (err, res, body) => {
      if (err) { return console.log(err); }
      response.setHeader('content-type', 'application/json');
      response.end(body);
    });
  }
  if (location === "USA") {
    request('http://127.0.0.1:'+ port +'/' + service + '/all/USA', { method: 'GET' }, (err, res, body) => {
      if (err) { return console.log(err); }
      response.setHeader('content-type', 'application/json');
      response.end(body);
    });
  }
});

router.get('/classB/:service/team', (req, response, next) => {

  let port;
  let service = req.params.service;

  if(service === "bookservice") {
    port = 3034;
  }
  if(service === "dvdservice") {
    port = 3035;
  }
  if(service === "laptopservice") {
    port = 3036;
  }


  request('http://127.0.0.1:'+ port +'/' + service + '/team', { method: 'GET' }, (err, res, body) => {
    if (err) { return console.log(err); }
    response.setHeader('content-type', 'application/json');
    response.end(body);
  })

});

module.exports = router;