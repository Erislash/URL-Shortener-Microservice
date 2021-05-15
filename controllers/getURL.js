const path = require('path');
const getURL = require(path.join(__dirname, '..', 'models', 'getURL.js'));


//MARIADB
// function get(req, res) {
//     getURL(req.params.id, (url) => {
//         res.status(300).redirect(url);
//     });
// }

// module.exports = get;

////////////////////////////////////////////////////////////////////////////
//MONGODB
function save(req, res) {
    getURL(req.params.id, (url) => {
        res.status(300).redirect(url);
    });
}
module.exports = save;