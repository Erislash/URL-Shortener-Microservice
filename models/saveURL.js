const path = require('path');
// const db = require(path.join(__dirname, '..', 'database.js'));

//MARIADB
// function saveURL(url, callback){
//     db.getConnection()
//     .then(conn => {
//         conn.query("INSERT INTO urls VALUES(NULL, ?)", [url])
//         .then(res => {
//             callback(res.insertId);
//             conn.release();
//         })
//         .catch(err => {
//             callback(-1);
//             console.error("Error while adding url");
//         });
//     })
//     .catch(err => {
//         callback(-1);
//         console.error("Error while Connecting to DB");
//     });
// }

// module.exports = saveURL;


/////////////////////////////////////////////////////
//MONGODB
let collection = null;
require(path.join(__dirname, '..', 'database.js')).getConnection(c => {
    collection = c;
});

function GetLastID(callback){
    collection
      .find({})
      .sort( { shorted_id: -1 } )
      .limit(1)
      .toArray()
      .then(res => {
        callback(res[0].shorted_id);
      })
}

module.exports = (url, callback) => {
    GetLastID((id) => {
        const doc = { shorted_id: id + 1, original_url: url };
        collection.insertOne(doc)
        .then(res => {
            callback(id + 1);
        })
        .catch(err => {
            callback(-1);
            console.error("Error while adding url");
        });
    })
}