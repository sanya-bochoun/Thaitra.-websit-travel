const mongoose = require('mongoose');

const tourSearchSchema = new mongoose.Schema({
  location: { type: String, required: true, maxlength: 50 },
  date: { type: Date, required: true },
  guests: { type: Number, required: true, min: 1, max: 10 }
}, { timestamps: true });

module.exports = mongoose.model('TourSearch', tourSearchSchema); 