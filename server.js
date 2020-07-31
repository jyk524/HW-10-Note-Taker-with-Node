// Dependencies

var express = require("express");
var path = require("path");
const { allowedNodeEnvironmentFlags } = require("process");

// Setting up Express App
var app = express();
var port = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
