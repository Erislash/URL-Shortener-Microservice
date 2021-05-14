const routes = require('express').Router();

routes.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = routes;