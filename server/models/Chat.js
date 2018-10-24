// william wall
var mongoose = require('mongoose'), Schema = mongoose.Schema;

var ChatSchema = new mongoose.Schema({
  room : { type: Schema.Types.ObjectId, ref: 'Room' }, // this links chat to rooms
  nickname: String,
  message: String,
  created_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Chat', ChatSchema);
