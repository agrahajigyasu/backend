const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const url = require('url');
const urlList=require('./../../../urls');

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
  let url;
  if(service === "bookservice") {
    port = 3034;
    url=urlList.bookurl;
  }
  if(service === "dvdservice") {
    port = 3035;
    url=urlList.dvdurl;
  }
  if(service === "laptopservice") {
    port = 3036;
    url=urlList.laptopurl;
  }

  if (location === "India") {
    request(url +'/' + service + '/all/India', { method: 'GET' }, (err, res, body) => {
      if (err) { return console.log(err); }
      response.setHeader('content-type', 'application/json');
      response.end(body);
    });
  }
  if (location === "USA") {
    request(url +'/' + service + '/all/USA', { method: 'GET' }, (err, res, body) => {
      if (err) { return console.log(err); }
      response.setHeader('content-type', 'application/json');
      response.end(body);
    });
  }
});

router.get('/classB/:service/team', (req, response, next) => {

  let port;
  let service = req.params.service;

  let url;
  if(service === "bookservice") {
    port = 3034;
    url=urlList.bookurl;
  }
  if(service === "dvdservice") {
    port = 3035;
    url=urlList.dvdurl;
  }
  if(service === "laptopservice") {
    port = 3036;
    url=urlList.laptopurl;
  }


  request(url+'/' + service + '/team', { method: 'GET' }, (err, res, body) => {
    if (err) { return console.log(err); }
    response.setHeader('content-type', 'application/json');
    response.end(body);
  })

});

module.exports = router;