const express = require("express");
const userRouter = express.Router();

const controller = require('./controller');

const authenticateJwt = require('../../auth/authenticate');
const adminOnly = require('../../auth/adminOnly');


// create
userRouter.post('/', (req, res, next) => {
  return controller.create(req, res, next);
});

// read - auth
userRouter.get('/', authenticateJwt, (req, res, next) => {
  return controller.findAll(req, res, next);
});
// read - auth
userRouter.get('/:id', authenticateJwt, (req, res, next) => {
  return controller.findOne(req, res, next);
});

// update - auth
userRouter.put('/:id', authenticateJwt, (req, res, next) => {
  return controller.update(req, res, next);
});
// update - auth
userRouter.patch('/:id', authenticateJwt, (req, res, next) => {
  return controller.update(req, res, next);
});

// delete - auth
userRouter.delete('/:id', authenticateJwt, (req, res, next) => {
  return controller.delete(req, res, next);
});


module.exports = userRouter;