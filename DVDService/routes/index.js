var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const dvds = require('../modules/dvd');



const dvdSchema = {
  type: "object",
  required: ["title", "mpaa_rating", "studio", "time", "price"],
  properties: {
    title: {
      type: "string"
    },
    mpaa_rating: { 
      type: "string"
    },
    studio: {
      type: "string"
    },
    time: {
      type: "number"
    },
    price: {
      type: "number"
    }
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).send({ 
    status: "Good To Go!" ,
    links: [
      "/dvdservice/all/:location",
      "/dvdservice/team"
    ]});
});

/* GET DVDs based on location. */
router.get('/dvdservice/all/:location', function(req, res, next) {
  const location = req.params.location;

  let salesTax;
  
  if (location.toLowerCase() === 'usa') {
    salesTax = 0.08;
  } else if (location.toLowerCase() === 'india') {
    salesTax = 0.075;
  } else {res.status(404).send({ error: "Something Went wrong" });}

  if (salesTax != null) {
    const result = dvds.get_taxed_dvds(salesTax);

    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(result));
  } else {
    res.status(404).send({ error: "Something Went wrong" });
  }
});

router.get('/dvdservice/team', function(req, res, next) {
  res.send({ 
      team: 'Team Bradman',
      membersNames: ["Aakash Gopal Vachhani",
      "Agraha Jigyasu",
      "Amish Raj",
      "Archita Sajjan",
      "Danush S",
      "Mayank Chippa",
      "Nagaraj M",
      "Pragati Mishra",
      "Priya Kanodia",
      "Sayed Muhsin",
      "Shikha Gupta",
      "Vishal B Gangapatnam",
      "Yash Agarwal",
      "Yogita Sangwan"]
    });
});

router.post('/dvdservice/add', function( req, res, next) {
  console.log(req.body);
  const dvd = req.body;
  let added = dvds.add_dvd(dvd);
  res.setHeader('content-type', 'application/json');
  if(added){
    res.status(201);
    res.end("Success");
  } else {
    res.status(500);
    res.end("Could not write object to JSON file");
  }
});

module.exports = router;
