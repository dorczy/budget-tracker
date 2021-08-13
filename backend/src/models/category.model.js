const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

CategorySchema.plugin(idValidator);

module.exports = mongoose.model('Category', CategorySchema);