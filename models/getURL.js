const path = require('path');
// const db = require(path.join(__dirname, '..', 'database.js'));

//MARIADB (SQL)
// function saveURL(id, callback){
//     db.getConnection()
//     .then(conn => {
//         conn.query("SELECT original FROM urls WHERE id = ?", [id])
//         .then(row => {
//             conn.release();
//             callback(row[0].original);
//         })
//         .catch(err => {
//             console.log('ERROR WHILE RETRIEVING ORIGINAL URL');
//             console.log('===================================');
//             console.log(err);
//         });
//     })
//     .catch(err => {
//         console.log('ERROR WHILE GETING DB CONNECTION');
//         console.log('===================================');
//         console.log(err);
//     });
// }

// module.exports = saveURL;








/////////////////////////////////////////////////////
//MONGODB

let collection = null;
require(path.join(__dirname, '..', 'database.js')).getConnection(c => {
    collection = c;
});


module.exports = (id, callback) => {
    collection
    .findOne({shorted_id:Number(id)})
    .then(res => {
        if(res){
          callback(res.original_url)
          return;
        }
        callback('/');
    })
}