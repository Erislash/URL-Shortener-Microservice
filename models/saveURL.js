const path = require('path');
const db = require(path.join(__dirname, '..', 'database.js'));


function saveURL(url, callback){
    db.getConnection()
    .then(conn => {
        conn.query("INSERT INTO urls VALUES(NULL, ?)", [url])
        .then(res => {
            callback(res.insertId);
            conn.release();
        })
        .catch();
    })
    .catch();
}

module.exports = saveURL;