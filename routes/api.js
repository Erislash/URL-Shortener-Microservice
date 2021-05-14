const path = require('path');
const routes = require('express').Router();
const saveURL = require(path.join(__dirname, '..', 'controllers', 'saveURL.js'));
const getURL = require(path.join(__dirname, '..', 'controllers', 'getURL.js'));


routes.get('/api/shorturl/:id', getURL);
routes.post('/api/shorturl', saveURL);
  
module.exports = routes;