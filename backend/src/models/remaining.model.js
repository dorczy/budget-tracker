const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const RemainingSchema = mongoose.Schema({
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
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
  deadlineDate: {
    type: Date,
    default: new Date(),
    required: true,
  },
  done: {
    type: String,
    default: 'nem',
    required: true,
  },
  doneDate: {
    type: Date,
  },
  doneMethod: {
    type: String,
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


RemainingSchema.plugin(idValidator);

module.exports = mongoose.model('Remaining', RemainingSchema);
