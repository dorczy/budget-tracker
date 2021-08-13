const createError = require('http-errors');
const remainingService = require('./remaining.service');
const Remaining = require('../../models/remaining.model');


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
  if (!checkModel(Remaining, req.body, next)) {
    return;
  }

  return remainingService
    .create(req.body)
    .then( createdRemaining => {
      res.status(201);
      res.json(createdRemaining);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};



exports.findAll = (req, res, next) => {
  return remainingService
    .findAll()
    .then( remainings => {
      res.json(remainings);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};

exports.findOne = (req, res, next) => {
  return remainingService
    .findOne(req.params.id)
    .then( remaining => {
      if (!remaining) {
        return next( new createError.NotFound("Remaining is not found!") );
      }
      res.json(remaining);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};



exports.update = (req, res, next) => {
  if (!checkModel(Remaining, req.body, next)) {
    return;
  }

  return remainingService
    .update(req.params.id, req.body)
    .then( remaining => {
      res.json(remaining)
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};



exports.delete = (req, res, next) => {
  return remainingService
    .delete(req.params.id)
    .then( () => res.json({}) )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};