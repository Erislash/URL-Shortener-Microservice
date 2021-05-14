const path = require('path');
const getURL = require(path.join(__dirname, '..', 'models', 'getURL.js'));


function get(req, res) {
    getURL(req.params.id, (url) => {
        res.status(300).redirect(url);
    });
}

module.exports = get;