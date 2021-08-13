const express = require("express");
const router = express.Router();

const controller = require('./user.controller');

const authenticateJwt = require('../../auth/authenticate');
const adminOnly = require('../../auth/adminOnly');


// create
router.post('/', (req, res, next) => {
  return controller.create(req, res, next);
});

// read
router.get('/', (req, res, next) => {
  return controller.findAll(req, res, next);
});
// read
router.get('/:id', (req, res, next) => {
  return controller.findOne(req, res, next);
});

// update - auth
router.put('/:id', (req, res, next) => {
  return controller.update(req, res, next);
});
// update - auth
router.patch('/:id', (req, res, next) => {
  return controller.update(req, res, next);
});

// delete - auth
router.delete('/:id', authenticateJwt, (req, res, next) => {
  return controller.delete(req, res, next);
});


module.exports = router;