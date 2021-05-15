// require('dotenv').config();
// const mariadb = require('mariadb');

// const connection = {
//     host:process.env.HOST,
//     user:process.env.USER,
//     password:process.env.PASSWORD,
//     database:process.env.DATABASE,
// };

// const pool = mariadb.createPool(connection);

// module.exports = pool;



///////////////////////////////////////////////

const MongoClient = require('mongodb').MongoClient;

const events = require('events');
const eventEmitter = new events.EventEmitter();



const uri = process.env.URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
let col = null; 
client.connect()
.then(conn => {
  console.log("MongoDB CONNECTED");
  col = conn.db().collection('urls');
  eventEmitter.emit('connected');
})
.catch(err => {
  console.log("Error connecting to MongoDB DATABASE");
  client.close();
});

module.exports = {
    getConnection: (callback) => {
        eventEmitter.on('connected', () => {
            callback(col);
        })
    }
};
