const express = require("express");
const controller = require('./person.controller');

const router = express.Router();

// create - post
router.post('/', (req, res, next) => {
  return controller.create(req, res, next);
});

// read - get all
router.get('/', (req, res, next) => {
  return controller.findAll(req, res, next);
});

// read - get one
router.get('/:id', (req, res, next) => {
  return controller.findOne(req, res, next);
});

// update - put
router.put('/:id', (req, res, next) => {
  return controller.update(req, res, next);
});

// delete - delete
router.delete('/:id', (req, res, next) => {
  return controller.delete(req, res, next);
});

module.exports = router;