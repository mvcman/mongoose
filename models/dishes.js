const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema or table for comments
const commentSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
},{
  timestamp: true
});

// Schema or table for dishes
const dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  comments: [ commentSchema ]
},{
  timestamp: true
});

var Dishes = mongoose.model('Dish', dishSchema);
module.exports = Dishes;
