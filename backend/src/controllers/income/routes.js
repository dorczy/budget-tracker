const express = require("express");
const router = express.Router();

const Income = require('../../models/income.model');
const baseRouter = require('../base/routes');


const incomeRouter = baseRouter(Income, ['user'], router);


module.exports = incomeRouter;