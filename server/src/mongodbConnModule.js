// william wall
var mongoose = require('mongoose');

module.exports.connect = function() {
	mongoose.connect('mongodb://william:william1@ds139193.mlab.com:39193/autoreview');
    // mongodb://localhost:27017/MEVN-boilerplate
    //
	var db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error"));
	db.once("open", function(callback){
	  console.log("Connection Succeeded");
	});
	return db;
}