const createError = require('http-errors');
const personService = require('./person.service');


// Create a new person.
exports.create = (req, res, next) => {
  const { first_name, last_name, email } = req.body;

  if (!first_name || !last_name || !email) {
    return next( new createError.BadRequest("Missing properties!") );
  };

  const newPerson = {
    firstName: first_name,
    lastName: last_name,
    email: email
  };

  return personService
    .create(newPerson)
    .then( createdPerson => {
      res.status(201);
      res.json(createdPerson);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};




// Get all people.
exports.findAll = (req, res, next) => {
  return personService
    .findAll()
    .then( people => {
      res.json(people);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};




// Get one person.
exports.findOne = (req, res, next) => {
  return personService
    .findOne(req.params.id)
    .then( person => {
      if (!person) {
        return next( new createError.NotFound("Person is not found!") );
      }
      res.json(person);
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};




// Update a person.
exports.update = (req, res, next) => {
  const { first_name, last_name, email } = req.body;

  if ( !first_name || !last_name || !email ) {
    return next( new createError.BadRequest("Missing properties!") );
  };

  const updatedPerson = {
    firstName: first_name,
    lastName: last_name,
    email: email
  };

  return personService
    .update(req.params.id, updatedPerson)
    .then( person => {
      res.json(person)
    } )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};




// Delete one person.
exports.delete = (req, res, next) => {
  return personService
    .delete(req.params.id)
    .then( () => res.json({}) )
    .catch( err => next(new createError.InternalServerError(err.message)) );
};
