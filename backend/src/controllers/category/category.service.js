const Category = require('../../models/category.model');


exports.create = data => {
  const category = new Category(data);
  return category.save();
};

exports.findAll = () => Category.find();

exports.findOne = id => Category.findById(id);

exports.update = (id, updateData) => Category.findByIdAndUpdate(id, updateData, {new: true});

exports.delete = id => Category.findByIdAndRemove(id);
