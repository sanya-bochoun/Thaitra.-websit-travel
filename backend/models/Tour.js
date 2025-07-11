const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 100 },
  description: { type: String, required: true, maxlength: 1000 },
  location: { type: String, required: true, maxlength: 100 },
  price: { type: Number, required: true, min: 0 },
  image: { type: String }, // URL รูปภาพ
  date: { type: Date, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Tour', tourSchema); 