const Remaining = require('../../models/remaining.model');


exports.create = data => {
  if (data.amount < 0) {
    data.amount *= -1;
  };
  const remaining = new Remaining(data);
  return remaining.save();
};

exports.findAll = () => Remaining.find().populate('category user');

exports.findOne = id => Remaining.findById(id).populate('category user');

exports.update = (id, updateData) => Remaining.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Remaining.findByIdAndRemove(id);
