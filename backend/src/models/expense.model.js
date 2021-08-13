const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const ExpenseSchema = mongoose.Schema({
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
    default: 'igen',
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


ExpenseSchema.plugin(idValidator);

module.exports = mongoose.model('Expense', ExpenseSchema);
