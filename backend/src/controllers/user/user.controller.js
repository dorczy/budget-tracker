const createError = require('http-errors');
const personService = require('./user.service');
const User = require('../../models/user.model');


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
  if (!checkModel(User, req.body, next)) {
    return;
  }

  return personService
    .create(req.body)
    .then( createdUser => {
      res.status(201);
      res.json(createdUser);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};



exports.findAll = (req, res, next) => {
  return personService
    .findAll()
    .then( users => {
      res.json(users);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};

exports.findOne = (req, res, next) => {
  return personService
    .findOne(req.params.id)
    .then( user => {
      if (!user) {
        return next( new createError.NotFound("User is not found!") );
      }
      res.json(user);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};



exports.update = (req, res, next) => {
  if (!checkModel(User, req.body, next)) {
    return;
  }

  return personService
    .update(req.params.id, req.body)
    .then( user => {
      res.json(user)
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};



exports.delete = (req, res, next) => {
  return personService
    .delete(req.params.id)
    .then( () => res.json({}) )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};