// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var braintree = require("braintree");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "45wbbvr7j4sv3qtj",
  publicKey: "hn9b5tqq9hgmm5d3",
  privateKey: "3ddd030fa021c7a402221e106348677b"
});
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router



// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/test', function(req, res) {
    res.json({ message: 'Hooray! This is my first API call!' });   
});

router.get('/free', function(req, res) {
  	gateway.subscription.update("jdm9bm", {
  	  planId: "53g2",
	  merchantAccountId: "appbase"
  	}, function (err, result) {
  		console.log(result)
  	});
  	res.json({ message: 'Plan updated!' });   
});

router.get('/startup', function(req, res) {
  	gateway.subscription.update("jdm9bm", {
  	  planId: "832m",
	  merchantAccountId: "appbase"
  	}, function (err, result) {
  		console.log(result)
  	});
  	res.json({ message: 'Plan updated!' });   
});

router.get('/growth', function(req, res) {
  	gateway.subscription.update("jdm9bm", {
  	  planId: "g27r",
	  merchantAccountId: "appbase"
  	}, function (err, result) {
  		console.log(result)
  	});
  	res.json({ message: 'Plan updated!' });   
});

router.get('/hacker', function(req, res) {
  	gateway.subscription.update("jdm9bm", {
  	  planId: "nzdw",
	  merchantAccountId: "appbase"
  	}, function (err, result) {
  		console.log(result)
  	});
  	res.json({ message: 'Plan updated!' });   
});


router.get('/premier', function(req, res) {
  	gateway.subscription.update("jdm9bm", {
  	  planId: "23vg",
	  merchantAccountId: "appbase"
  	}, function (err, result) {
  		console.log(result)
  	});
  	res.json({ message: 'Plan updated!' });   
});


router.get('/enterprise', function(req, res) {
  	gateway.subscription.update("jdm9bm", {
  	  planId: "vtpb",
	  merchantAccountId: "appbase"
  	}, function (err, result) {
  		console.log(result)
  	});
  	res.json({ message: 'Plan updated!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);