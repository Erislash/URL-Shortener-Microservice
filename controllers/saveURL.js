const path = require('path');
const saveURL = require(path.join(__dirname, '..', 'models', 'saveURL.js'));


function save(req, res) {
    saveURL(req.body.url, (id) => {
        res.json({ original_url : req.body.url, short_url : id})
    });
}

module.exports = save;