const path = require('path');
const saveURL = require(path.join(__dirname, '..', 'models', 'saveURL.js'));

//MARIA / MONGODB
function save(req, res) {
    const url = req.body.url;
    const urlRegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    if(!urlRegExp.test(url)){
        res.json({error:'Invalid URL'})
        return
    }
    saveURL(url, (id) => {
        if(id === -1){
            res.json({error:'Internal error while saving url'})
            return;
        }
        res.json({ original_url : req.body.url, short_url : id})
    });
}
module.exports = save;