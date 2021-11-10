const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const food = require('../modules/food');
const url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
  res.status(200).send({ 
    status: "Good To Go!" ,
    links: [
      "/foodservice/all/:location",
      "/foodservice/team"
    ]});
});

router.get('/foodservice/all/:location', (request, response, next) => {
  const location = request.params.location;
  console.log('got into foodservice/all/: ' + location);

  if (!(location ==="USA" || location === "India")){
    response.status(400).send({
      error : "We only provide information for USA and India." });
  }
  else{
    const result = food.priceList(location);
    if (result) {
      response.setHeader('content-type', 'application/json');
      response.end(JSON.stringify(result));
    } 
    else {
      response.status(404).send({ error: "Something Went wrong" });
    }
  }
});

router.get('/foodservice/team', (request, response, next) => {
  const result = food.teamList();
  if (result) {
    response.setHeader('content-type', 'application/json');
    response.end(JSON.stringify(result));
  } 
  else {
    response.status(404).send({ error: "Something Went wrong" });
  }
});


module.exports = router;

// router.get('/food', (request, response, next) => {
//   let get_params = url.parse(request.url, true).query;
//   console.log('got into food');
//   if (Object.keys(get_params).length == 0) {
//     console.log('no params');
//     response.setHeader('content-type', 'application/json');
//     response.end(JSON.stringify(food.list()));
//   } else {
//  // get first parameter only
//     let key = Object.keys(get_params)[0]; 
//     console.log("First key is: " + key);
//     let value = request.query[key];
//     console.log('params ' + value);
//     let result = food.query_by_arg(key, value);
//     if (result) {
//       response.setHeader('content-type', 'application/json');
//       response.end(JSON.stringify(result));
//     } else {
//       next(createError(404));
//     }
//   }
// });








