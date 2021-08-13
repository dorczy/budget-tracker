const createError = require('http-errors');

const baseService = require('./service');


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


module.exports = ( Model, populateList = [], service ) => {

  let currentService;

  if (!service) {
    currentService = baseService(Model, populateList);
  } else {
    currentService = service(Model, populateList);
  }

  return {
    create: (req, res, next) => {
      if (!checkModel(Model, req.body, next)) {
        return;
      }

      return currentService
        .create(req.body)
        .then( createdEntity => {
          res.status(201);
          res.json(createdEntity);
        } )
        .catch( err => next(new createError.InternalServerError(err.message)) );
    },

    findAll: (req, res, next) => {
      return currentService
        .findAll()
        .then( entities => {
          res.json(entities);
        } )
        .catch( err => next(new createError.InternalServerError(err.message)) );
    },

    findOne: (req, res, next) => {
      return currentService
        .findOne(req.params.id)
        .then( entity => {
          if (!entity) {
            return next( new createError.NotFound("Entity is not found!") );
          }
          res.json(entity);
        } )
        .catch( err => next(new createError.InternalServerError(err.message)) );
    },

    update: (req, res, next) => {
      if (!checkModel(Model, req.body, next)) {
        return;
      }

      return currentService
        .update(req.params.id, req.body)
        .then( entity => {
          res.json(entity)
        } )
        .catch( err => next(new createError.InternalServerError(err.message)) );
    },

    delete: (req, res, next) => {
      return currentService
        .delete(req.params.id)
        .then( () => res.json({}) )
        .catch( err => next(new createError.InternalServerError(err.message)) );
    }
  }
}
