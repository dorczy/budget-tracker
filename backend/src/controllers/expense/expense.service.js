const Expense = require('../../models/expense.model');

exports.create = data => {
  if (data.amount > 0) {
    data.amount *= -1;
  };

  const expense = new Expense(data);
  return expense.save();
};

exports.findAll = () => Expense.find().populate('category user');

exports.findOne = id => Expense.findById(id).populate('category user');

exports.update = (id, updateData) => {
  if (updateData.amount > 0) {
    updateData.amount *= -1;
  };

  return Expense.findByIdAndUpdate(id, updateData, {new: true});
};

exports.delete = id => Expense.findByIdAndRemove(id);

