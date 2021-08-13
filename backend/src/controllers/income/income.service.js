const Income = require('../../models/income.model');


exports.create = data => {
  const income = new Income(data);
  return income.save();
};

exports.findAll = () => Income.find().populate('user');

exports.findOne = id => Income.findById(id).populate('user');

exports.update = (id, updateData) => Income.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Income.findByIdAndRemove(id);
