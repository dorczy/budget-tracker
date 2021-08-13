const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const IncomeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  period: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  doneDate: {
    type: Date,
    default: new Date(),
    required: true,
  },
  doneMethod: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  }
}, {
  timestamps: true
});


IncomeSchema.plugin(idValidator);

module.exports = mongoose.model('Income', IncomeSchema);
