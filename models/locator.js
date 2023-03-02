const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  longitude: {
    type: Number,
    required: true,
    min: -180,
    max: 180
  },
  latitude: {
    type: Number,
    required: true,
    min: -90,
    max: 90
  },
  altitude:{
    type: Number,
    required: true,
    min: -90,
    max: 90
 },

  timestamp: {
    type: Date,
    required: true
  },

});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
