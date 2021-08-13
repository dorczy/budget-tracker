const express = require("express");
const router = express.Router();

const Expense = require('../../models/expense.model');
const expenseController = require('./controller');

const baseRouter = require('../base/routes');
const expenseRouter = baseRouter(Expense, ['category user'], router, expenseController);


module.exports = expenseRouter;