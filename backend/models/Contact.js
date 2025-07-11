const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 50 },
  email: { type: String, required: true, maxlength: 50 },
  number: { type: String, required: true, maxlength: 10 },
  message: { type: String, required: true, maxlength: 1000 }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema); 