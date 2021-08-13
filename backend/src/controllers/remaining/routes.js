const express = require("express");
const router = express.Router();

const Remaining = require('../../models/remaining.model');
const remainingController = require('./controller');

const baseRouter = require('../base/routes');
const remainingRouter = baseRouter(Remaining, ['category user'], router, remainingController);


module.exports = remainingRouter;