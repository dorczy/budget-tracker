const express = require('express');
const controller = require('./post.controller');

const router = express.Router();

router.post('/', (req, res, next) => {
  return controller.create(req, res, next);
});

router.get('/', (req, res, next) => {
  return controller.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
  return controller.findOne(req, res, next);
});


module.exports = router;
