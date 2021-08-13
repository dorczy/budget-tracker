const createError = require('http-errors');
const incomeService = require('./income.service');
const Income = require('../../models/income.model');


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
  if (!checkModel(Income, req.body, next)) {
    return;
  }

  return incomeService
    .create(req.body)
    .then( createdIncome => {
      res.status(201);
      res.json(createdIncome);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};



exports.findAll = (req, res, next) => {
  return incomeService
    .findAll()
    .then( incomes => {
      res.json(incomes);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};

exports.findOne = (req, res, next) => {
  return incomeService
    .findOne(req.params.id)
    .then( income => {
      if (!income) {
        return next( new createError.NotFound("Income is not found!") );
      }
      res.json(income);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};



exports.update = (req, res, next) => {
  if (!checkModel(Income, req.body, next)) {
    return;
  }

  return incomeService
    .update(req.params.id, req.body)
    .then( income => {
      res.json(income)
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};



exports.delete = (req, res, next) => {
  return incomeService
    .delete(req.params.id)
    .then( () => res.json({}) )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};