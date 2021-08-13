const createError = require('http-errors');
const categoryService = require('./category.service');
const Category = require('../../models/category.model');


const checkModel = (Model, body, next) => {
  const validationErrors = new Model(body).validateSync();

  if (validationErrors) {
    next( new createError.BadRequest({
      message: 'Invalid Schema!',
      error: validationErrors
    }) );
    return false;
  }

  return true;
};


exports.create = (req, res, next) => {
  if (!checkModel(Category, req.body, next)) {
    return;
  }

  return categoryService
    .create(req.body)
    .then( createdCategory => {
      res.status(201);
      res.json(createdCategory);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};



exports.findAll = (req, res, next) => {
  return categoryService
    .findAll()
    .then( categories => {
      res.json(categories);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};

exports.findOne = (req, res, next) => {
  return categoryService
    .findOne(req.params.id)
    .then( category => {
      if (!category) {
        return next( new createError.NotFound("Category is not found!") );
      }
      res.json(category);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};



exports.update = (req, res, next) => {
  if (!checkModel(Category, req.body, next)) {
    return;
  }

  return categoryService
    .update(req.params.id, req.body)
    .then( category => {
      res.json(category)
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};



exports.delete = (req, res, next) => {
  return categoryService
    .delete(req.params.id)
    .then( () => res.json({}) )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};