function url_game(){
let url = require('url');
let adr = 'http://localhost:8080/chess?width=5&height=5';
let urlObject = url.parse(adr,true);
   return urlObject.pathname;
}
module.exports.url_game = url_game;