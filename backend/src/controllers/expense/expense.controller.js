const createError = require('http-errors');
const expenseService = require('./expense.service');
const Expense = require('../../models/expense.model');


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
  if (!checkModel(Expense, req.body, next)) {
    return;
  }

  return expenseService
    .create(req.body)
    .then( createdExpense => {
      res.status(201);
      res.json(createdExpense);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};



exports.findAll = (req, res, next) => {
  return expenseService
    .findAll()
    .then( expenses => {
      res.json(expenses);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};

exports.findOne = (req, res, next) => {
  return expenseService
    .findOne(req.params.id)
    .then( expense => {
      if (!expense) {
        return next( new createError.NotFound("Expense is not found!") );
      }
      res.json(expense);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};



exports.update = (req, res, next) => {
  if (!checkModel(Expense, req.body, next)) {
    return;
  }

  return expenseService
    .update(req.params.id, req.body)
    .then( expense => {
      res.json(expense)
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};



exports.delete = (req, res, next) => {
  return expenseService
    .delete(req.params.id)
    .then( () => res.json({}) )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};
