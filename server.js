#!/bin/env node

var express = require('express');
var app = express();

//Get the environment variables we need.
var ipaddr  = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.listen( port, ipaddr, function() {
 console.log( 'listening on port ' + port );
} );