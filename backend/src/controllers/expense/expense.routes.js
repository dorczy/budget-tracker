const express = require("express");
const router = express.Router();

const controller = require('./expense.controller');

const adminOnly = require('../../auth/adminOnly');


// create
router.post('/', adminOnly, (req, res, next) => {
  return controller.create(req, res, next);
});

// read
router.get('/', (req, res, next) => {
  return controller.findAll(req, res, next);
});
// read
router.get('/:id', adminOnly, (req, res, next) => {
  return controller.findOne(req, res, next);
});

// update
router.put('/:id', adminOnly, (req, res, next) => {
  return controller.update(req, res, next);
});
// update
router.patch('/:id', adminOnly, (req, res, next) => {
  return controller.update(req, res, next);
});

// delete
router.delete('/:id', adminOnly, (req, res, next) => {
  return controller.delete(req, res, next);
});


module.exports = router;