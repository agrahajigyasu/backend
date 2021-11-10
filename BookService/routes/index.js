const createError = require('http-errors');
const express = require('express');
const router = express.Router();
const books = require('../modules/books');
const url = require('url');
const team = require('../modules/team');

/* GET home page. */
router.get('/bookservice', (request, response, next) => {
  let get_params = url.parse(request.url, true).query;
  console.log('got into books');
  if (Object.keys(get_params).length == 0) {
    console.log('no params');
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify(books.list()));
  }
});
// example for using path variable
// todo: Set up for /servicename/location
router.get('/', function (request, response, next)  {
  response.render('index', {title: 'Books'});  
})
router.get('/bookservice/all/:location', (request, response, next) => {
  const param = request.params.location;
  console.log('got into /bookservice/all/:location ' + param);

  const result = books.price_difference(param);
  console.log(result);
  if (result) {
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify(result));
  } else {
    next(createError(404));
  }
});

router.post('/bookservice/add', function(req, res, next){
  console.log(req.body);

  let reqBody = req.body;

  if(reqBody.Title && reqBody.Author && reqBody.price && reqBody.ISBN && reqBody.publisher)
  {
    console.log("Data recieved");
    let bookItem = {
      "Title": req.body.Title,
      "Author": req.body.Author,
      "price": req.body.price,
      "ISBN": req.body.ISBN,
      "publisher": req.body.publisher
    }
  
    let added =books.add_book(bookItem);
    if(added){
      res.status(201).send({ statusCode: "Successfully added!" });
    } else {
      res.status(500).send({ error: "Could not write object to JSON file" });
    }
  } else {
    res.status(400).end();
  }

});
router.get('/bookservice/team', (request, response, next) => {
  console.log('got into books/team');
  response.setHeader('content-type', 'application/json');
  response.end(JSON.stringify(team.list()));

});
module.exports = router;
