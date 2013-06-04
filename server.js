#!/bin/env node

var express = require('express');
var Pusher = require( 'pusher' )

var app = express();
var config = require( __dirname + '/config.json' );

//Get the environment variables we need.
var ipaddr  = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.use(express.static(__dirname + '/public'));
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );

app.get( '/', function( req, res ) {
  res.render('index', { appKey: config.pusher.key } );
});

app.get( '/trigger', function( req, res ) {
  var pusher = new Pusher( config.pusher );
  var data =  {
                message: 'Hello World using Pusher on OpenShift!'
              };
  pusher.trigger( 'test-channel', 'test-event', data, null, function( err, pusherReq, pusherRes ) {
      res.json( pusherRes.statusCode, { status: pusherRes.statusCode } );
  } );

} );

app.listen( port, ipaddr, function() {
 console.log( 'listening on port ' + port );
} );